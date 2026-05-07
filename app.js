const sections = [
  ["company", "Company Profile", "1-2 min"],
  ["humans", "Organizational Structure", "5-15 min"],
  ["agents", "AI Agents Inventory", "3-10 min"],
  ["policy", "Policy & Approval Rules", "2-3 min"],
  ["goals", "Goals & Context", "1-2 min"],
];

const options = {
  industry: ["Manufacturing", "Financial Services", "Healthcare", "Technology", "Retail", "Energy", "Education", "Government", "Professional Services", "Other"],
  employee_count_band: ["1-50", "51-250", "251-1000", "1001-5000", "5000+"],
  annual_revenue_band: ["<$50M", "$50M-$250M", "$250M-$1B", "$1B+", "prefer not to say"],
  regulatory_exposure: ["SOX", "HIPAA", "PCI-DSS", "GDPR", "CCPA", "EU AI Act", "Colorado AI Act", "FedRAMP", "ISO 27001", "SOC 2", "none"],
  primary_it_environment: ["Microsoft", "Google", "Mixed", "Other"],
  identity_provider: ["Okta", "Microsoft Entra", "Google Workspace", "Ping", "JumpCloud", "Other", "None"],
  hris_system: ["Workday", "BambooHR", "ADP", "Paylocity", "Rippling", "Gusto", "Other", "None"],
  platform: ["Microsoft Copilot Studio", "Salesforce Agentforce", "ServiceNow AI Agents", "OpenAI Custom GPT", "Anthropic Claude", "n8n", "Zapier", "Make", "LangGraph", "GitHub Action", "MCP Workflow", "Python script", "Custom internal", "Internal Builder", "Other"],
  actions_capable: ["read_only", "write_internal", "send_external_email", "move_money", "delete_records", "modify_permissions", "unsure"],
  systems_touched: ["Salesforce", "HubSpot", "Marketo", "Slack", "Microsoft 365", "Snowflake", "ServiceNow", "NetSuite", "Workday", "SAP", "GitHub", "Tableau", "Email"],
  simple: {
    agents_must_have_human_sponsor: ["currently_required", "soft_policy", "no_policy"],
    external_email_approval: ["always_required", "sometimes_required", "never_required", "no_policy"],
    financial_action_approval: ["always", "threshold_based", "never", "no_policy"],
    audit_cycle: ["monthly", "quarterly", "annually", "ad_hoc", "none"],
    yesNo: ["yes", "no", "unsure"],
    policy: ["yes", "no", "in_progress"],
    incident: ["yes", "no", "prefer_not_to_say"],
    upcoming_event: ["Audit", "certification", "M&A diligence", "regulatory deadline", "none"],
    deployment_reasons: ["Audit readiness", "security risk", "productivity tracking", "governance", "executive visibility", "regulatory compliance", "M&A diligence", "board mandate", "other"]
  }
};

const humans = [
  ["Sarah Chen","CEO","Executive",""],["Marcus Rivera","COO","Operations","sarah.chen"],["Elena Patel","CFO","Finance","sarah.chen"],["David Kim","Chief Sales Officer","Sales","sarah.chen"],["Evelyn Carter","CIO","IT","sarah.chen"],
  ["Priya Nair","VP Finance Systems","Finance","elena.patel"],["Nina Brooks","Finance Automation Lead","Finance","priya.nair"],["Liam Walsh","Controller","Finance","elena.patel"],["Maya Douglas","Director, FP&A","Finance","liam.walsh"],["Grace Liu","Senior Accountant","Finance","maya.douglas"],["Noah Ford","Procurement Manager","Finance","nina.brooks"],["Iris Wong","AP Specialist","Finance","nina.brooks"],
  ["Jane Smith","Sales Operations Manager","Sales","david.kim"],["Omar Patel","Salesforce App Owner","Sales","jane.smith"],["Raj Mehta","Director of Marketing Ops","Sales","david.kim"],["Sara Klein","Customer Success Manager","Sales","david.kim"],["Ana Romero","VP Enterprise Sales","Sales","david.kim"],["Caleb Stone","Regional Sales Director","Sales","ana.romero"],["Mina Park","Account Executive","Sales","caleb.stone"],["Theo Grant","RevOps Analyst","Sales","jane.smith"],["Hannah Price","Marketing Automation Specialist","Sales","raj.mehta"],
  ["Dana Lee","ServiceNow App Owner","IT","evelyn.carter"],["Kira Olsen","Snowflake App Owner","IT","evelyn.carter"],["Tom Yamada","Engineering Manager, Data","Engineering","evelyn.carter"],["Victor Allen","VP Infrastructure","IT","evelyn.carter"],["Leah Morris","Director, Security","IT","victor.allen"],["Ben Adler","Cloud Engineer","IT","victor.allen"],["Sofia Rossi","Security Analyst","IT","leah.morris"],["Ethan Brooks","Data Engineer","Engineering","tom.yamada"],["Paige Morgan","Platform Engineer","Engineering","tom.yamada"],
  ["Alex Moreno","Director of People Operations","HR","sarah.chen"],["June Bell","CHRO","HR","sarah.chen"],["Marta Silva","HRIS Manager","HR","june.bell"],["Amir Khan","People Analytics Lead","HR","alex.moreno"],["Chloe Young","Recruiting Operations","HR","alex.moreno"],["Derek Hill","Learning Program Manager","HR","june.bell"],
  ["Olivia Reed","VP Manufacturing Ops","Operations","marcus.rivera"],["Nathan Cole","Director, Plant Operations","Operations","olivia.reed"],["Renee Scott","Quality Systems Manager","Operations","olivia.reed"],["Peter Novak","Supply Chain Director","Operations","marcus.rivera"],["Aisha Turner","Warehouse Automation Lead","Operations","peter.novak"],["Jonas Weber","Maintenance Manager","Operations","nathan.cole"],["Mei Tan","Production Planner","Operations","nathan.cole"],["Samir Desai","Vendor Operations Lead","Operations","peter.novak"],
  ["Laura Finch","Director, Product Engineering","Engineering","evelyn.carter"],["Mateo Cruz","Controls Engineer","Engineering","laura.finch"],["Zoe Bennett","QA Automation Engineer","Engineering","laura.finch"],["Chris O'Neill","Systems Analyst","Engineering","tom.yamada"],["Farah Aziz","Data Scientist","Engineering","tom.yamada"]
].map((h,i)=>({email:`${h[0].toLowerCase().replace(/[^a-z ]/g,"").replace(" ",".")}@apexindustrial.com`, full_name:h[0], title:h[1], department:h[2], manager_email:h[3]?`${h[3]}@apexindustrial.com`:"", employee_id:`AIG-${String(i+1).padStart(4,"0")}`, office_location:i%3===0?"Atlanta, GA":i%3===1?"Chicago, IL":"Dallas, TX", employment_status:"active", job_level:i<5?"E8":i<17?"E6":"E4"}));

const namedAgents = [
  ["Sales Proposal Agent","Microsoft Copilot Studio","jane.smith","Sales","Drafts compliant sales proposal packets from approved templates.",["Salesforce","Microsoft 365"],["write_internal","send_external_email"],"yes","medium"],
  ["Forecast Cleanup Agent","LangGraph","jane.smith","Sales","Normalizes weekly forecast records and flags stale opportunities.",["Salesforce","Snowflake"],["write_internal"],"unsure","high"],
  ["Quote Review Agent","Internal Builder","jane.smith","Sales","Reviews quote packages for discount and margin anomalies.",["Salesforce","NetSuite"],["write_internal"],"yes","medium"],
  ["Renewal Email Agent","Microsoft Copilot Studio","jane.smith","Sales","Prepares customer renewal messages for account manager approval.",["Email","Salesforce"],["send_external_email"],"unsure","high"],
  ["Pipeline Monitor","Internal Builder","tom.yamada","Engineering","Watches opportunity changes and alerts operations on large swings.",["Salesforce","Slack"],["read_only"],"yes","low"],
  ["Schema Doc Bot","GitHub Action","tom.yamada","Engineering","Generates schema documentation after data model changes.",["GitHub"],["write_internal"],"yes","low"],
  ["Cost Anomaly Watcher","Internal Builder","tom.yamada","Engineering","Flags abnormal cloud and warehouse spend patterns.",["Snowflake","Slack"],["read_only"],"yes","medium"],
  ["PR Summarizer","GitHub Action","tom.yamada","Engineering","Summarizes pull requests for release managers.",["GitHub","Slack"],["write_internal"],"yes","low"],
  ["ServiceDesk Triage Agent","ServiceNow AI Agents","dana.lee","IT","Routes incoming support tickets and drafts initial responses.",["ServiceNow"],["write_internal"],"yes","medium"],
  ["Ticket Summarizer","ServiceNow AI Agents","dana.lee","IT","Creates executive summaries for recurring incident tickets.",["ServiceNow"],["read_only"],"yes","low"],
  ["Knowledge Base Updater","ServiceNow AI Agents","dana.lee","IT","Suggests knowledge base edits from resolved incidents.",["ServiceNow"],["write_internal"],"unsure","medium"],
  ["Invoice Match Agent","MCP Workflow","nina.brooks","Finance","Matches vendor invoices against purchase orders.",["NetSuite","Email"],["write_internal"],"unsure","high"],
  ["Payment Exception Agent","Internal Builder","nina.brooks","Finance","Flags payment exceptions for finance team review.",["NetSuite"],["move_money"],"no","high"],
  ["Expense Summarizer","Microsoft Copilot Studio","priya.nair","Finance","Summarizes monthly expense variance for department leaders.",["Microsoft 365","NetSuite"],["read_only"],"yes","medium"],
  ["AP Intake Agent","Make","priya.nair","Finance","Routes AP inbox attachments into finance queues.",["Email","NetSuite"],["write_internal"],"unsure","medium"],
  ["Vendor Risk Bot","Microsoft Copilot Studio","priya.nair","Finance","Screens vendor notes for risk and compliance markers.",["Microsoft 365","NetSuite"],["read_only"],"yes","medium"]
];
const orphanAgents = ["Legacy Data Cleanup Agent|Python script","sf-pipeline-bot|GitHub Action","invoice-reconciler-old|Python script","tableau-refresh-bot|Internal Builder","lead-import-zap|Zapier","support-mailer|Make","gh-secret-scanner|GitHub Action","slack-dm-summary|Internal Builder","cron-data-export|Python script","forecast-helper-v2|LangGraph","demo-bot-test|Microsoft Copilot Studio","mcp-data-broker|MCP Workflow"];
const extraAgents = ["Plant Shift Briefing Agent","Safety Incident Classifier","Inventory Reorder Assistant","Supplier ETA Monitor","Warranty Claim Summarizer","Customer Churn Watcher","Campaign Copy Reviewer","HR Policy Helper","Recruiting Screen Bot","Access Review Helper","Snowflake Usage Reporter","Board Packet Assembler","Maintenance Planner","Quality Nonconformance Bot"].map((n,i)=>[n,options.platform[(i+2)%options.platform.length],humans[(i+8)%humans.length].email.split("@")[0],humans[(i+8)%humans.length].department,`Supports ${humans[(i+8)%humans.length].department.toLowerCase()} workflows with governed automation.`,[options.systems_touched[i%options.systems_touched.length]],i%5===0?["delete_records"]:["read_only"],i%3===0?"unsure":"yes",i%5===0?"high":"medium"]);
const demoAgents = [...namedAgents,...extraAgents].map(agentFromRow).concat(orphanAgents.map((s,i)=>{const [n,p]=s.split("|"); return {agent_name:n, platform:p, owner_email:"", department:["IT","Finance","Sales","Operations"][i%4], purpose:`Legacy automation discovered during Apex demo preparation.`, systems_touched:[options.systems_touched[i%options.systems_touched.length]], actions_capable:i%3===0?["delete_records"]:["write_internal"], it_security_approved:i%2?"unsure":"no", last_known_active:"2026-04-15", risk_self_assessment:"high"};}));
function agentFromRow(r){return {agent_name:r[0], platform:r[1], owner_email:`${r[2]}@apexindustrial.com`, department:r[3], purpose:r[4], systems_touched:r[5], actions_capable:r[6], it_security_approved:r[7], last_known_active:"2026-04-20", risk_self_assessment:r[8]};}

const demo = {
  company:{company_name:"Apex Industrial Group",operating_name:"Apex Industrial",industry:"Manufacturing",employee_count_band:"1001-5000",annual_revenue_band:"$250M-$1B",headquarters_country:"United States",headquarters_city:"Atlanta, GA",regulatory_exposure:["SOX","SOC 2","EU AI Act"],primary_it_environment:"Microsoft",identity_provider:"Microsoft Entra",hris_system:"Workday"},
  humans,
  agents:demoAgents,
  policy:{agents_must_have_human_sponsor:"soft_policy",external_email_approval:"sometimes_required",financial_action_approval:"threshold_based",financial_threshold:10000,forbidden_agent_types:"No agents on payment systems",ai_tool_approver_email:"marcus.rivera@apexindustrial.com",audit_cycle:"quarterly",has_formal_ai_policy:"in_progress",ai_risk_register_exists:"no",recent_ai_incident:"prefer_not_to_say"},
  goals:{deployment_reasons:["Audit readiness","security risk","executive visibility"],upcoming_event:"Audit",upcoming_event_date:"2026-09-15",success_90_days:"Have a complete inventory of every AI agent in production with a named human owner and risk score.",success_12_months:"Pass our 2026 SOX audit with zero AI-related findings. Reduce orphaned agents to zero.",specific_concerns:"We have an upcoming SOX audit and our external auditors are starting to ask about AI agent governance."}
};

let state = JSON.parse(localStorage.getItem("pedigreeWorkspace") || "null") || {id:crypto.randomUUID(),active:"company",demoLoaded:false,generated:null,company:{},humans:[],agents:[],policy:{},goals:{}};
let saveTimer;
const app = document.getElementById("app");

function render(){
  const pct = completion();
  app.innerHTML = `<div class="shell">
    <header class="header"><div class="brand"><span class="mark">P</span><strong class="brandName">Pedigree</strong><span>Demo Workspace</span></div><div class="headerCenter"><div class="progress" aria-label="Completion"><div style="width:${pct}%"></div></div><strong>${pct}% complete</strong><button class="btn" ${pct<100?"disabled title='Complete all required sections first'":""} onclick="generateManifest()">Generate Manifest</button></div><div class="headerActions">${state.demoLoaded?'<span class="badge">Demo Data Loaded</span>':''}<button class="btn demo" onclick="confirmDemo()">Populate Demo Data</button></div></header>
    <nav class="nav">${sections.map(s=>`<button class="${state.active===s[0]?"active":""}" onclick="setActive('${s[0]}')"><span class="dot ${status(s[0])}"></span><span>${s[1]}</span><small>${s[2]}</small></button>`).join("")}</nav>
    <main class="main"><div class="content">${sectionHtml()}${state.generated?downloadHtml():""}<div class="saveState">Workspace ${state.id} · autosaved locally</div></div></main></div><div class="toast" id="toast"></div>`;
}
function setActive(id){state.active=id; persist(); render();}
function update(section,key,value){state[section][key]=value; debounceSave(); render();}
function toggle(section,key,value){const arr=state[section][key]||[]; state[section][key]=arr.includes(value)?arr.filter(x=>x!==value):[...arr,value]; debounceSave(); render();}
function debounceSave(){clearTimeout(saveTimer); saveTimer=setTimeout(()=>{persist(); toast("Saved");},2000);}
function persist(){localStorage.setItem("pedigreeWorkspace",JSON.stringify(state));}
function status(s){const p=sectionPct(s); return p===100?"complete":p>0?"progressing":"";}
function completion(){return Math.round(sections.reduce((a,s)=>a+sectionPct(s[0]),0)/sections.length);}
function sectionPct(s){
  const req = {company:["company_name","industry","employee_count_band","annual_revenue_band","headquarters_country","regulatory_exposure","primary_it_environment","identity_provider","hris_system"],policy:["agents_must_have_human_sponsor","external_email_approval","financial_action_approval","ai_tool_approver_email","audit_cycle","has_formal_ai_policy","ai_risk_register_exists","recent_ai_incident"],goals:["deployment_reasons","upcoming_event","success_90_days","success_12_months"]};
  if(s==="humans") return state.humans.length?100:0;
  if(s==="agents") return state.agents.length?100:0;
  let keys=req[s], done=keys.filter(k=>Array.isArray(state[s][k])?state[s][k].length:!!state[s][k]).length;
  if(s==="policy"&&state.policy.financial_action_approval==="threshold_based"&&!state.policy.financial_threshold) done--;
  if(s==="goals"&&state.goals.upcoming_event&&state.goals.upcoming_event!=="none"&&!state.goals.upcoming_event_date) done--;
  return Math.max(0,Math.round(done/keys.length*100));
}
function input(section,key,label,type="text"){return `<div class="field"><label>${label}</label><input value="${esc(state[section][key]||"")}" type="${type}" oninput="update('${section}','${key}',this.value)"></div>`;}
function text(section,key,label){return `<div class="field full"><label>${label}</label><textarea oninput="update('${section}','${key}',this.value)">${esc(state[section][key]||"")}</textarea></div>`;}
function select(section,key,label,opts){return `<div class="field"><label>${label}</label><select onchange="update('${section}','${key}',this.value)"><option value="">Select...</option>${opts.map(o=>`<option ${state[section][key]===o?"selected":""}>${o}</option>`).join("")}</select></div>`;}
function checks(section,key,label,opts){const vals=state[section][key]||[];return `<div class="field full"><label>${label}</label><div class="checks">${opts.map(o=>`<label class="check"><input type="checkbox" ${vals.includes(o)?"checked":""} onchange="toggle('${section}','${key}','${o}')">${o}</label>`).join("")}</div></div>`;}
function sectionHtml(){
  if(state.active==="company") return `<h1>Company Profile</h1><p class="lede">Capture the company baseline Pedigree needs for governance, risk, and dashboard context.</p><div class="panel grid">${input("company","company_name","Legal company name")}${input("company","operating_name","Operating name")}${select("company","industry","Industry",options.industry)}${select("company","employee_count_band","Employee count",options.employee_count_band)}${select("company","annual_revenue_band","Annual revenue",options.annual_revenue_band)}${input("company","headquarters_country","Headquarters country")}${input("company","headquarters_city","Headquarters city")}${select("company","primary_it_environment","Primary IT environment",options.primary_it_environment)}${select("company","identity_provider","Identity provider",options.identity_provider)}${select("company","hris_system","HRIS system",options.hris_system)}${checks("company","regulatory_exposure","Regulatory exposure",options.regulatory_exposure)}</div>`;
  if(state.active==="humans") return listSection("Organizational Structure","Upload a roster CSV, download the template, or add humans manually. Manager emails are validated against the roster.", "humans");
  if(state.active==="agents") return listSection("AI Agents Inventory","Most companies don't have a complete list of their AI agents. List the agents you know about; Pedigree will discover what you don't know after integration.", "agents");
  if(state.active==="policy") return `<h1>Policy & Approval Rules</h1><p class="lede">Capture the current governance posture, even where the policy is informal or still in progress.</p><div class="panel grid">${select("policy","agents_must_have_human_sponsor","Human sponsor policy",options.simple.agents_must_have_human_sponsor)}${select("policy","external_email_approval","External email approval",options.simple.external_email_approval)}${select("policy","financial_action_approval","Financial action approval",options.simple.financial_action_approval)}${input("policy","financial_threshold","Financial threshold","number")}${text("policy","forbidden_agent_types","Forbidden agent types")}${select("policy","ai_tool_approver_email","AI tool approver",state.humans.map(h=>h.email))}${select("policy","audit_cycle","Audit cycle",options.simple.audit_cycle)}${select("policy","has_formal_ai_policy","Formal AI policy",options.simple.policy)}${select("policy","ai_risk_register_exists","AI risk register",options.simple.yesNo)}${select("policy","recent_ai_incident","Recent AI incident",options.simple.incident)}</div>`;
  return `<h1>Goals & Context</h1><p class="lede">Give the manifest enough executive context to explain why the deployment matters now.</p><div class="panel grid">${checks("goals","deployment_reasons","Deployment reasons",options.simple.deployment_reasons)}${select("goals","upcoming_event","Upcoming event",options.simple.upcoming_event)}${input("goals","upcoming_event_date","Upcoming event date","date")}${text("goals","success_90_days","Success in 90 days")}${text("goals","success_12_months","Success in 12 months")}${text("goals","specific_concerns","Specific concerns")}</div>`;
}
function listSection(title,lede,type){
  const rows=state[type], sample=type==="humans"?["email","full_name","title","department","manager_email","employee_id","office_location","employment_status","job_level"]:["agent_name","platform","owner_email","department","purpose","systems_touched","actions_capable","it_security_approved","last_known_active","risk_self_assessment"];
  return `<h1>${title}</h1><p class="lede">${lede}</p><div class="panel"><div class="row"><label class="btn secondary">Upload CSV<input type="file" accept=".csv" hidden onchange="importCsv('${type}',this.files[0])"></label><button class="btn ghost" onclick="downloadTemplate('${type}')">Download Template</button><button class="btn" onclick="addManual('${type}')">${type==="humans"?"Add human":"Add agent"}</button></div><p class="hint">${rows.length} ${type==="humans"?"humans":"agents"} loaded. CSV columns: ${sample.join(", ")}</p></div><div class="cardList">${rows.slice(0,100).map((r,i)=>`<div class="itemCard"><div><strong>${esc(r.full_name||r.agent_name)}</strong><span>${esc(r.title||r.platform||"")} · ${esc(r.department||"No department")} ${r.owner_email===""?"· Orphaned":""}</span></div><button class="btn secondary" onclick="removeRow('${type}',${i})">Remove</button></div>`).join("")}</div>`;
}
function addManual(type){const row=type==="humans"?{email:"new.person@example.com",full_name:"New Person",title:"Title",department:"Department",manager_email:"",employment_status:"active"}:{agent_name:"New Agent",platform:"Other",owner_email:"",department:departments()[0]||"Department",purpose:"Describe what this agent does.",systems_touched:[],actions_capable:["read_only"],it_security_approved:"unsure",risk_self_assessment:"unsure"}; state[type]=[...state[type],row]; persist(); render();}
function removeRow(type,i){state[type]=state[type].filter((_,idx)=>idx!==i); persist(); render();}
function importCsv(type,file){if(!file)return; const reader=new FileReader(); reader.onload=()=>{const rows=parseCsv(reader.result); state[type]=rows.map(r=>normalizeRow(type,r)).filter(Boolean); persist(); render(); toast(`Imported ${state[type].length} rows`);}; reader.readAsText(file);}
function parseCsv(text){const lines=text.trim().split(/\r?\n/).map(l=>l.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c=>c.replace(/^"|"$/g,"").trim())); const head=lines.shift().map(mapHeader); return lines.map(cols=>Object.fromEntries(head.map((h,i)=>[h,cols[i]||""])));}
function mapHeader(h){const x=h.toLowerCase().replace(/[\s_-]/g,""); const m={email:"email",emailaddress:"email",workemail:"email",primaryemail:"email",fullname:"full_name",name:"full_name",employeename:"full_name",displayname:"full_name",jobtitle:"title",position:"title",role:"title",department:"department",dept:"department",team:"department",manageremail:"manager_email",reportsto:"manager_email",manager:"manager_email"}; return m[x]||h;}
function normalizeRow(type,r){if(type==="humans") return {email:r.email,full_name:r.full_name,title:r.title,department:r.department,manager_email:r.manager_email||"",employee_id:r.employee_id||"",office_location:r.office_location||"",employment_status:r.employment_status||"active",job_level:r.job_level||""}; return {...r,systems_touched:split(r.systems_touched),actions_capable:split(r.actions_capable)};}
function split(v){return Array.isArray(v)?v:(v||"").split(/[|;]/).map(s=>s.trim()).filter(Boolean);}
function downloadTemplate(type){const headers=type==="humans"?"email,full_name,title,department,manager_email,employee_id,office_location,employment_status,job_level":"agent_name,platform,owner_email,department,purpose,systems_touched,actions_capable,it_security_approved,last_known_active,risk_self_assessment"; download(`${type}_template.csv`,headers+"\n","text/csv");}
function confirmDemo(){app.insertAdjacentHTML("beforeend",`<div class="modalBackdrop"><div class="modal"><h2>Replace current data?</h2><p class="lede">This will overwrite anything currently in the form with the Apex Industrial Group demo dataset.</p><div class="row"><button class="btn demo" onclick="loadDemo()">Populate Demo Data</button><button class="btn secondary" onclick="render()">Cancel</button></div></div></div>`);}
function loadDemo(){state={...state,...JSON.parse(JSON.stringify(demo)),demoLoaded:true,generated:null}; persist(); render(); toast("Demo data loaded");}
function departments(){return [...new Set(state.humans.map(h=>h.department).filter(Boolean))];}
async function generateManifest(){
  const now=new Date().toISOString(), company=state.company, workspace_id=state.id, manifest_id=crypto.randomUUID(), dept=departments();
  const humanEmails=new Set(state.humans.map(h=>h.email)); const metrics=metricsFor(humanEmails);
  let manifest={manifest_version:"1.0",manifest_id,generated_at:now,generated_by:{workspace_id,submitted_by:"workspace_token"},company,humans:state.humans,reporting_relationships:state.humans.filter(h=>h.manager_email).map(h=>({human_email:h.email,manager_email:h.manager_email})),departments:dept.map(d=>({name:d,human_count:state.humans.filter(h=>h.department===d).length,agent_count:state.agents.filter(a=>a.department===d).length})),agents:state.agents,policy_rules:state.policy,goals_and_context:state.goals,completeness:{score:completion(),sections:Object.fromEntries(sections.map(s=>[s[0],sectionPct(s[0])]))},computed_metrics:metrics};
  const hash=await sha(canonical(manifest)); manifest.signature={algorithm:"sha256",hash,signed_at:now}; state.generated=manifest; persist(); render(); toast("Manifest generated");
}
function metricsFor(humanEmails){const agents=state.agents, orphaned=agents.filter(a=>!a.owner_email||!humanEmails.has(a.owner_email)).length, high=agents.filter(a=>a.risk_self_assessment==="high"||intersects(a.actions_capable||[],["move_money","delete_records","modify_permissions"])||intersects(a.systems_touched||[],["NetSuite","Snowflake","SAP","Workday"])).length; let score=100-(orphaned*5)-(high*2); if(state.policy.has_formal_ai_policy!=="yes") score-=10; if(["quarterly","monthly"].includes(state.policy.audit_cycle)) score+=10; return {agents_discovered:agents.length,agents_with_owner:agents.length-orphaned,orphaned_agents:orphaned,high_risk_agents:high,audit_readiness_score:Math.max(0,Math.min(100,score))};}
function intersects(a,b){return a.some(x=>b.includes(x));}
function canonical(v){if(v===null||typeof v!=="object") return JSON.stringify(v); if(Array.isArray(v)) return `[${v.map(canonical).join(",")}]`; return `{${Object.keys(v).sort().map(k=>`${JSON.stringify(k)}:${canonical(v[k])}`).join(",")}}`;}
async function sha(s){const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)); return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("");}
function downloadHtml(){return `<div class="panel downloadPanel"><h2>Manifest Ready</h2><p class="lede">Workspace ${state.generated.generated_by.workspace_id} is ready for dashboard load or export.</p><div class="row"><button class="btn" onclick="downloadManifest()">Download manifest.json</button><button class="btn secondary" onclick="downloadBundle()">Download bundle.zip</button><button class="btn demo" onclick="loadDashboard()">Load to Dashboard</button></div></div>`;}
function downloadManifest(){download("manifest.json",JSON.stringify(state.generated,null,2),"application/json");}
function downloadBundle(){const files={"manifest.json":JSON.stringify(state.generated,null,2),"humans.csv":toCsv(state.humans),"agents.csv":toCsv(state.agents),"departments.csv":toCsv(state.generated.departments),"README.md":`# Pedigree Manifest Bundle\n\nGenerated for ${state.company.company_name}.\n\nWorkspace: ${state.id}\n`}; downloadBlob("pedigree-bundle.zip",makeZip(files),"application/zip");}
function toCsv(rows){if(!rows.length)return ""; const head=Object.keys(rows[0]); return [head.join(","),...rows.map(r=>head.map(h=>`"${String(Array.isArray(r[h])?r[h].join("|"):r[h]??"").replace(/"/g,'""')}"`).join(","))].join("\n");}
function makeZip(files){
  const encoder=new TextEncoder(), local=[], central=[]; let offset=0;
  for(const [name,body] of Object.entries(files)){
    const nameBytes=encoder.encode(name), data=encoder.encode(body), crc=crc32(data), now=new Date(), time=((now.getHours()<<11)|(now.getMinutes()<<5)|(now.getSeconds()/2))&0xffff, date=(((now.getFullYear()-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate())&0xffff;
    const lf=new Uint8Array(30+nameBytes.length+data.length), ldv=new DataView(lf.buffer);
    ldv.setUint32(0,0x04034b50,true); ldv.setUint16(4,20,true); ldv.setUint16(10,time,true); ldv.setUint16(12,date,true); ldv.setUint32(14,crc,true); ldv.setUint32(18,data.length,true); ldv.setUint32(22,data.length,true); ldv.setUint16(26,nameBytes.length,true); lf.set(nameBytes,30); lf.set(data,30+nameBytes.length); local.push(lf);
    const cf=new Uint8Array(46+nameBytes.length), cdv=new DataView(cf.buffer);
    cdv.setUint32(0,0x02014b50,true); cdv.setUint16(4,20,true); cdv.setUint16(6,20,true); cdv.setUint16(12,time,true); cdv.setUint16(14,date,true); cdv.setUint32(16,crc,true); cdv.setUint32(20,data.length,true); cdv.setUint32(24,data.length,true); cdv.setUint16(28,nameBytes.length,true); cdv.setUint32(42,offset,true); cf.set(nameBytes,46); central.push(cf); offset+=lf.length;
  }
  const centralSize=central.reduce((a,b)=>a+b.length,0), end=new Uint8Array(22), edv=new DataView(end.buffer);
  edv.setUint32(0,0x06054b50,true); edv.setUint16(8,central.length,true); edv.setUint16(10,central.length,true); edv.setUint32(12,centralSize,true); edv.setUint32(16,offset,true);
  return new Blob([...local,...central,end],{type:"application/zip"});
}
function crc32(data){let c=-1; for(const b of data){c=(c>>>8)^crcTable[(c^b)&255];} return (c^-1)>>>0;}
const crcTable=Array.from({length:256},(_,n)=>{let c=n; for(let k=0;k<8;k++) c=c&1?0xedb88320^(c>>>1):c>>>1; return c>>>0;});
function loadDashboard(){localStorage.setItem("pedigreeLoadedManifest",JSON.stringify(state.generated)); location.hash=`/app/workspace/${state.id}`; toast("Dashboard handoff stored locally");}
function download(name,body,type){const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([body],{type})); a.download=name; a.click(); URL.revokeObjectURL(a.href);}
function downloadBlob(name,blob,type){const a=document.createElement("a"); a.href=URL.createObjectURL(blob instanceof Blob?blob:new Blob([blob],{type})); a.download=name; a.click(); URL.revokeObjectURL(a.href);}
function toast(msg){const el=document.getElementById("toast"); if(!el)return; el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),1800);}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}
render();
