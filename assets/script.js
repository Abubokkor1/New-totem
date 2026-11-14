const $=id=>document.getElementById(id);
$('year').textContent=new Date().getFullYear();
$('menuToggle').addEventListener('click',()=> $('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=> $('nav').classList.remove('open')));
fetch('/content/site.json').then(r=>{if(!r.ok)throw new Error('content unavailable');return r.json()}).then(c=>{
  const set=(id,v)=>{if($(id)&&v!==undefined&&v!==null)$(id).textContent=v};
  set('announcement',c.announcement);set('eyebrow',c.eyebrow);set('headline',c.headline);set('description',c.description);set('serverIp',c.server_ip);set('serverPort',c.server_port);set('edition',c.edition);set('version',c.version);set('gameMode',(c.game_mode||'Survival').toUpperCase());set('ranksStatus',c.ranks_status);set('cratesStatus',c.crates_status);set('discordDescription',c.discord_description);set('footerText',c.footer_text);
  ['discordLink','heroDiscord'].forEach(id=>{if($(id)&&c.discord_url)$(id).href=c.discord_url});
  document.title=(c.brand||'TOTEM SMP')+' | Minecraft Survival Network';
}).catch(()=>console.info('Using built-in Totem SMP content.'));
