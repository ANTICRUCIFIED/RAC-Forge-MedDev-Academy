import { ShieldCheck, UserX, UserCheck, Activity, Brain, ShieldAlert, Zap, AlertTriangle, CheckCircle, Scale, Building2, Target } from 'lucide-react';

export default function Chapter1() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          Learning Objectives
        </h3>
        <div className="my-6 rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Hospital room representing medical devices" className="w-full h-64 object-cover" />
        </div>
        <p className="mb-2 font-medium">After completing this chapter, the reader will be able to:</p>
        <ul className="mt-2 mb-0 space-y-2">
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Understand what a medical device is.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Understand why governments regulate medical devices.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Differentiate between medicines and medical devices.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Appreciate why not all medical devices carry the same level of risk.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Understand the need for a risk-based classification system.</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /> Become familiar with the regulatory approach adopted under the Medical Devices Rules, 2017 (MDR 2017).</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.1 Introduction</h3>
      <p>
        Medical devices have become an <strong>essential part of modern healthcare</strong>. Whether you visit a hospital, a dental clinic, a diagnostic laboratory, or even use healthcare products at home, you are likely to encounter one or more medical devices.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6 my-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-500"/> Common Misconception</h4>
          <p className="text-sm m-0">Many people assume that medical devices are only large and sophisticated machines such as <strong>MRI scanners</strong> or <strong>ventilators</strong>.</p>
        </div>
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
          <h4 className="font-bold text-blue-900 mt-0 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600"/> The Reality</h4>
          <p className="text-sm text-blue-800 m-0">In reality, a medical device can be as simple as a <strong>bandage</strong> or as complex as an <strong>implantable artificial heart valve</strong>.</p>
        </div>
      </div>

      <p className="font-medium text-slate-700">Medical devices help healthcare professionals and patients in many different ways, including:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <div className="bg-blue-100 p-2 rounded-full"><Activity className="w-5 h-5 text-blue-600" /></div>
          <div><strong className="block text-slate-800">Diagnosis</strong><span className="text-sm">Identifying diseases or conditions (e.g., X-ray machines, blood glucose meters).</span></div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <div className="bg-green-100 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-green-600" /></div>
          <div><strong className="block text-slate-800">Prevention</strong><span className="text-sm">Stopping disease before it occurs (e.g., condoms, surgical masks).</span></div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <div className="bg-purple-100 p-2 rounded-full"><Brain className="w-5 h-5 text-purple-600" /></div>
          <div><strong className="block text-slate-800">Monitoring</strong><span className="text-sm">Tracking patient health status (e.g., ECG monitors, pulse oximeters).</span></div>
        </div>
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
          <div className="bg-red-100 p-2 rounded-full"><Zap className="w-5 h-5 text-red-600" /></div>
          <div><strong className="block text-slate-800">Treatment</strong><span className="text-sm">Providing therapy or sustaining life (e.g., pacemakers, ventilators).</span></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.2 What is a Medical Device?</h3>
      <p>Under the <strong>Medical Devices Rules, 2017 (MDR 2017)</strong>, the definition of a medical device is comprehensive. However, the core concept remains the same across most global regulatory frameworks.</p>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-6 rounded-r-xl shadow-sm relative overflow-hidden">
        <Scale className="absolute -right-4 -bottom-4 w-32 h-32 text-indigo-100 opacity-50" />
        <p className="m-0 font-medium text-blue-900 relative z-10 text-lg">
          A medical device is an instrument, apparatus, implement, machine, appliance, implant, reagent for in vitro use, software, material, or other similar or related article, intended by the manufacturer to be used, alone or in combination, for human beings, for one or more of the specific medical purpose(s).
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.3 Differentiating Between Medicines and Medical Devices</h3>
      <p>This is a fundamental distinction in regulatory science. The primary difference lies in the <strong>principal mode of action</strong>—how the product achieves its intended effect in or on the human body.</p>

      {/* FLOW CHART / DIAGRAM FOR DRUG VS DEVICE */}
      <div className="my-8 p-6 bg-slate-100 rounded-xl border border-slate-200">
        <h4 className="text-center font-bold text-slate-800 mb-6">How does the product achieve its intended effect?</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm w-full md:w-1/2 text-center relative">
            <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h5 className="font-bold text-blue-900 mb-2">Pharmacological, Immunological, or Metabolic Means</h5>
            <p className="text-sm text-slate-600">Alters body chemistry (e.g. Paracetamol, Insulin)</p>
            <div className="mt-4 py-2 bg-blue-600 text-white font-bold rounded">
              MEDICINE (DRUG)
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-center justify-center font-bold text-slate-400">
            VS
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-emerald-200 shadow-sm w-full md:w-1/2 text-center relative">
            <div className="mx-auto bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h5 className="font-bold text-emerald-900 mb-2">Physical or Mechanical Means</h5>
            <p className="text-sm text-slate-600">No primary chemical alteration (e.g. Pacemaker, Syringe)</p>
            <div className="mt-4 py-2 bg-emerald-600 text-white font-bold rounded">
              MEDICAL DEVICE
            </div>
          </div>

        </div>
      </div>

      <div className="overflow-x-auto my-8 shadow-sm rounded-xl">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="not-prose bg-slate-800">
              <th className="border border-slate-700 px-4 py-3 text-left font-bold text-blue-200 w-1/2">
                <div className="flex items-center gap-2"><Activity className="w-4 h-4"/> Medicine (Drug)</div>
              </th>
              <th className="border border-slate-700 px-4 py-3 text-left font-bold text-blue-200 w-1/2">
                <div className="flex items-center gap-2"><Zap className="w-4 h-4"/> Medical Device</div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-slate-200 px-4 py-3">Usually works through chemical action</td>
              <td className="border border-slate-200 px-4 py-3">Usually works through physical or mechanical action</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 px-4 py-3">Contains active pharmaceutical ingredients</td>
              <td className="border border-slate-200 px-4 py-3">May contain electronics, metals, polymers, plastics, software, or biomaterials</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3">Alters body chemistry</td>
              <td className="border border-slate-200 px-4 py-3">Performs a function without primarily changing body chemistry</td>
            </tr>
            <tr className="bg-blue-50/50">
              <td className="border border-slate-200 px-4 py-3"><strong>Examples:</strong> Paracetamol, Insulin, Antibiotics</td>
              <td className="border border-slate-200 px-4 py-3"><strong>Examples:</strong> ECG Machine, Syringe, Pacemaker, X-ray</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.4 Why Are Medical Devices Regulated?</h3>
      <p>Imagine buying a household thermometer. If it shows an incorrect reading by 0.5°C, the consequences may be minor. Now imagine a ventilator in an Intensive Care Unit (ICU). If the ventilator stops working unexpectedly, the patient may suffer severe harm or even die.</p>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 italic text-red-900 rounded-r-lg">
        Similarly, imagine an artificial heart valve failing after implantation. The consequences could be catastrophic. Clearly, <strong>not every medical device carries the same level of risk</strong>.
      </div>
      
      <p>For this reason, governments regulate medical devices before they can be marketed. The objectives of regulation are to ensure that medical devices:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0"/> <span className="text-sm font-medium">Are safe for patients and users.</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
          <Target className="w-5 h-5 text-blue-500 shrink-0"/> <span className="text-sm font-medium">Perform as intended.</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
          <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0"/> <span className="text-sm font-medium">Meet established quality standards.</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded shadow-sm">
          <Building2 className="w-5 h-5 text-slate-500 shrink-0"/> <span className="text-sm font-medium">Manufactured under proper QMS.</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.5 Why Is Risk Important?</h3>
      <p>Risk is one of the most important concepts in medical device regulation.</p>
      
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6 shadow-inner">
        <div className="flex items-center gap-3 mb-3 border-b border-amber-200 pb-3">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
          <h4 className="font-bold text-amber-900 text-lg m-0">Definition of Risk</h4>
        </div>
        <p className="m-0 font-medium text-amber-800 text-lg">
          <strong>Risk</strong> is the possibility that a medical device could cause harm to a patient, user, or another person when used as intended or under reasonably foreseeable conditions.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-200/50">
          <p className="m-0 font-bold text-amber-900 mb-2 text-sm uppercase tracking-wider">Risk depends on two factors:</p>
          <ul className="m-0 text-amber-800 space-y-1">
            <li><strong>Probability:</strong> How likely it is that something will go wrong.</li>
            <li><strong>Severity:</strong> How serious the consequences would be if it does.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.6 Why Not Regulate Every Device the Same Way?</h3>
      <p>Suppose the government required every medical device to undergo the same level of testing as an implantable heart valve. Even a simple adhesive bandage would require years of testing, extensive clinical evidence, and complex regulatory review.</p>
      
      <div className="bg-slate-100 p-5 rounded-lg border border-slate-200 my-6">
        <p className="font-bold mb-3 text-slate-800 m-0">This uniform approach would cause several issues:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-3 rounded text-center shadow-sm border border-slate-200 text-red-600 font-medium text-sm">Delay access to products</div>
          <div className="bg-white p-3 rounded text-center shadow-sm border border-slate-200 text-red-600 font-medium text-sm">Increase manufacturing costs</div>
          <div className="bg-white p-3 rounded text-center shadow-sm border border-slate-200 text-red-600 font-medium text-sm">Increase healthcare costs</div>
          <div className="bg-white p-3 rounded text-center shadow-sm border border-slate-200 text-red-600 font-medium text-sm">Slow down innovation</div>
        </div>
      </div>
      
      <p>On the other hand, applying only minimal controls to life-supporting devices would expose patients to unacceptable risks. Therefore, a balanced approach is needed. This approach is known as <strong>risk-based regulation</strong>.</p>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.7 What Is Risk-Based Classification?</h3>
      <p>Risk-based classification is a regulatory system in which medical devices are grouped according to the level of risk they present. Under the MDR 2017, devices are classified into four risk classes:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-8">
        <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
          <span className="text-3xl font-black text-green-700 mb-2">A</span>
          <span className="font-bold text-green-900">Low Risk</span>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <span className="text-3xl font-black text-blue-700 mb-2">B</span>
          <span className="font-bold text-blue-900">Low-Moderate Risk</span>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
          <span className="text-3xl font-black text-amber-700 mb-2">C</span>
          <span className="font-bold text-amber-900">Moderate-High Risk</span>
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <span className="text-3xl font-black text-red-700 mb-2">D</span>
          <span className="font-bold text-red-900">High Risk</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 border-b pb-2">1.8 An Analogy to Understand Risk-Based Classification</h3>
      <p>Medical devices are regulated in exactly the same way as bridges: the greater the potential risk, the greater the level of regulatory control.</p>
      
      <div className="grid sm:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-green-200 p-5 rounded-xl shadow-sm relative pt-8">
          <span className="absolute top-0 right-0 bg-green-500 text-blue-900 font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">Class A</span>
          <h4 className="font-bold text-green-800 mt-0 mb-2">Bridge 1</h4>
          <p className="text-sm m-0 text-slate-600">A small wooden bridge used by pedestrians in a village. If it fails, relatively few people are affected.</p>
        </div>
        <div className="bg-white border-2 border-blue-200 p-5 rounded-xl shadow-sm relative pt-8">
          <span className="absolute top-0 right-0 bg-blue-500 text-blue-900 font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">Class B</span>
          <h4 className="font-bold text-blue-800 mt-0 mb-2">Bridge 2</h4>
          <p className="text-sm m-0 text-slate-600">A bridge used by cars within a city. It requires stronger construction and more frequent inspections.</p>
        </div>
        <div className="bg-white border-2 border-amber-200 p-5 rounded-xl shadow-sm relative pt-8">
          <span className="absolute top-0 right-0 bg-amber-500 text-blue-900 font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">Class C</span>
          <h4 className="font-bold text-amber-800 mt-0 mb-2">Bridge 3</h4>
          <p className="text-sm m-0 text-slate-600">A major highway bridge carrying thousands of vehicles every day. Failure could have serious consequences, so standards are more stringent.</p>
        </div>
        <div className="bg-white border-2 border-red-200 p-5 rounded-xl shadow-sm relative pt-8">
          <span className="absolute top-0 right-0 bg-red-500 text-blue-900 font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">Class D</span>
          <h4 className="font-bold text-red-800 mt-0 mb-2">Bridge 4</h4>
          <p className="text-sm m-0 text-slate-600">A bridge supporting a high-speed railway. Any structural failure could result in catastrophic loss of life. It is designed and tested to the highest standards.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4 border-b pb-2 text-blue-900">1.9 Key Takeaways</h3>
      <div className="not-prose bg-slate-900 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <ul className="text-slate-200 space-y-4 mb-0">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0" /> 
            <span>A medical device is intended to diagnose, prevent, monitor, or treat medical conditions without primarily acting through pharmacological, immunological, or metabolic means.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0" /> 
            <span>Medical devices range from simple products, such as bandages, to complex life-supporting equipment and implants.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0" /> 
            <span>Not all medical devices pose the same level of risk, and regulatory controls are proportionate to the level of risk.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-indigo-400 shrink-0" /> 
            <span>The Medical Devices Rules, 2017 classify devices into <strong>Class A, B, C, and D</strong> using a risk-based approach grounded in intended use and the parameters set out in the First Schedule.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
