'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const read=(name)=>fs.readFileSync(path.join(root,name),'utf8');
const html=read('index.html');
const scriptPaths=[...html.matchAll(/<script\s+src="([^"]+)"/g)].map(x=>x[1]);
for(const p of scriptPaths)assert(fs.existsSync(path.join(root,p)),`index references a missing script: ${p}`);
for(const p of ['data.js','atlas-expansion.js','specialist-data.js','clinical-mastery.js','ward-revision.js','app.js'])assert(scriptPaths.includes(p),`required script missing: ${p}`);
assert(scriptPaths.indexOf('ward-revision.js')<scriptPaths.indexOf('app.js'));
const context={console,URL,localStorage:{getItem:()=>null,setItem:()=>{}},location:{hash:''},setTimeout:()=>1,clearTimeout:()=>{},};
context.window=context;context.window.scrollTo=()=>{};context.window.matchMedia=()=>({matches:true});
const els=new Map(),events={};
const mock=(id)=>{if(!els.has(id))els.set(id,{id,innerHTML:'',value:'',textContent:'',style:{},dataset:{},classList:{add(){},remove(){},contains(){return false},toggle(){}},listeners:{},addEventListener(event,cb){(this.listeners[event]??=[]).push(cb)},setAttribute(){},removeAttribute(){},focus(){},querySelectorAll(){return[]},querySelector(){return null}});return els.get(id)};
context.document={getElementById(id){return ['anatomy-canvas','mini-anatomy-canvas','anatomy-real-model','anatomy-atlas-frame'].includes(id)?null:mock(id)},querySelectorAll(){return[]},querySelector(){return null},addEventListener(event,cb){(events[event]??=[]).push(cb)},body:{style:{}}};
context.window.addEventListener=(ev,cb)=>{(events['window:'+ev]??=[]).push(cb)};
vm.createContext(context);
for(const p of scriptPaths){vm.runInContext(read(p),context,{filename:p,timeout:3000})}
const {MED_DATA:D,MED_EXT:E,MED_SPECIALIST:S,MED_MASTERY:M,MED_WARD:W}=context;
assert(D&&E&&S&&M&&W);
assert(W.notes.length>=60,'New medical library should have 60+ authored cards');
assert(new Set(W.notes.map(n=>n.id)).size===W.notes.length,'ward note IDs unique');
const required=['pattern','assessment','tests','trap','escalation','title'];
for(const note of W.notes){for(const k of required)assert(typeof note[k]==='string' && note[k].length>12,`${note.id} missing ${k}`);assert(note.category.length>0 && W.references[note.ref],`broken source pointer ${note.title}`)}
for(const r of Object.values(W.references))assert(/^https:\/\//.test(r.url),'reference must use HTTPS');
const paths=['overview','anatomy','guidelines','conditions','medicines','procedures','dictionary','learning','curriculum','clinical','investigations','cases','specialist','mastery','ward','bookmarks','sources','search'];
for(const route of paths){context.location.hash='#/'+route;for(const cb of events['window:hashchange']||[])cb();assert(mock('page').innerHTML.length>100,`empty page: ${route}`)}
context.location.hash='#/sources';for(const cb of events['window:hashchange']||[])cb();assert(mock('page').innerHTML.includes('Primary references'),'sources route should contain the source shelf');
context.location.hash='#/ward';for(const cb of events['window:hashchange']||[])cb();
assert(mock('page').innerHTML.includes('THE WARD DESK')&&mock('page').innerHTML.includes(W.notes[0].title),'ward page rendering missing');
const field=mock('global-search');field.value='neutropenic';for(const cb of field.listeners.input||[])cb({target:field});
assert(mock('page').innerHTML.toLowerCase().includes('neutropenic'),'global search does not index ward notes');
const anatomy=read('anatomy-integrated.html');assert(anatomy.includes('MEDATLAS_READY')&&anatomy.includes('MEDATLAS_FOCUS'),'handshake missing');
assert(anatomy.includes('loadWithDeadline')&&anatomy.includes('render-fallback'),'loading fallback missing');
assert(read('app.js').includes('MEDATLAS_READY')&&read('app.js').includes('sendAnatomyFocus'),'parent bridge missing');
assert(read('app.js').includes('anatomy-integrated.html'),'main anatomy route not connected');
assert(fs.existsSync(path.join(root,'MODEL_ATTRIBUTION.md')));
console.log(`PASS: ${paths.length} routes, ${W.notes.length} new ward cards, ${Object.keys(W.references).length} new references, global search, anatomy handshake and loading fallbacks.`);