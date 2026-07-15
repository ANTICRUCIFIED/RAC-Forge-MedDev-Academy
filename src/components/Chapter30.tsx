import { Building2, Activity, ShieldPlus, HeartPulse, Bone, ScanLine, Microscope, Settings, Syringe, Eye, Lightbulb, Stethoscope, Table2 } from 'lucide-react';

export default function Chapter30() {
  const DepartmentSection = ({ title, icon: Icon, children }: any) => (
    <div className="mb-10">
      <h3 className="text-2xl font-bold mt-8 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        {Icon && <Icon className="w-7 h-7 text-indigo-600" />}
        {title}
      </h3>
      {children}
    </div>
  );

  const DeviceCard = ({ number, title, purpose, rule, reasoning, note }: any) => (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
        <span className="bg-indigo-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Device {number}</span>
        <h4 className="font-bold text-slate-800 m-0">{title}</h4>
      </div>
      <div className="space-y-2">
        {purpose && (
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Purpose</span>
            <p className="text-sm text-slate-700 m-0">{purpose}</p>
          </div>
        )}
        {reasoning && (
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Questions/Reasoning</span>
            <p className="text-sm text-slate-700 m-0 whitespace-pre-line">{reasoning}</p>
          </div>
        )}
        {rule && (
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Applicable Rule</span>
            <p className="text-sm font-semibold text-indigo-700 m-0">{rule}</p>
          </div>
        )}
        {note && (
          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-2">
            <p className="text-sm text-slate-600 m-0">{note}</p>
          </div>
        )}
      </div>
    </div>
  );

  const LearningPoint = ({ children }: any) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r mt-6">
      <p className="text-sm font-bold text-blue-900 m-0 mb-1 uppercase tracking-wider">Learning Point</p>
      <p className="text-blue-800 m-0 font-medium">{children}</p>
    </div>
  );

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-xl shadow-sm text-center">
        <h1 className="text-2xl font-bold text-blue-900 mt-0 mb-2">PART IX</h1>
        <h2 className="text-xl font-semibold text-blue-800 mt-0 mb-4">Classification Case Studies Across Medical Specialties</h2>
        <p className="m-0 font-medium text-blue-900 italic bg-white p-4 rounded-lg shadow-sm border border-indigo-200 inline-block">
          "The best way to understand medical device classification is to see how it is applied in real hospitals."
        </p>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 30</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Practical Classification in Different Medical Specialties</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Walking Through a Hospital Like a Regulatory Professional"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand classification in real hospital departments.</li>
          <li>Learn why the same classification principles apply across different specialties.</li>
          <li>Understand how intended purpose influences classification.</li>
          <li>Learn common devices used in different departments.</li>
          <li>Develop confidence in practical classification.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Building2 className="w-6 h-6 text-indigo-500" /> 30.1 Welcome to Our Virtual Hospital</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Hospital hallway environment" className="w-full h-64 object-cover" />
      </div>
      <p>Imagine it is your first day as a Regulatory Affairs professional.</p>
      <p>Your manager says, <span className="font-semibold text-slate-700">"Today we are not reading the Medical Devices Rules."</span></p>
      <p>Instead, <span className="font-semibold text-slate-700">"We are visiting a hospital."</span></p>
      <p>Every room contains medical devices.</p>
      <p className="font-medium text-slate-800">Your task is not to treat patients, but to classify every device you see. Let's begin.</p>

      {/* SECTION 1: Emergency */}
      <DepartmentSection title="SECTION 1: Emergency Department (Casualty)" icon={Activity}>
        <p className="mb-6">The Emergency Department is the first place many patients visit. Patients arrive with accidents, heart attacks, strokes, breathing difficulty, bleeding, fractures. The equipment must work immediately.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="1"
            title="Blood Pressure Monitor"
            purpose="Measure blood pressure."
            reasoning="Active? Yes.&#10;Diagnosis? Yes."
            rule="Rule 10."
          />
          <DeviceCard 
            number="2"
            title="Pulse Oximeter"
            purpose="Monitor oxygen saturation."
            rule="Rule 10."
          />
          <DeviceCard 
            number="3"
            title="Defibrillator"
            purpose="Restore normal heart rhythm."
            rule="Rule 9."
          />
          <DeviceCard 
            number="4"
            title="Examination Couch"
            purpose="Support patient examination."
            note="Classification depends on whether it is intended as a medical device and its specific functions."
          />
          <DeviceCard 
            number="5"
            title="Suction Pump"
            purpose="Remove body fluids."
            rule="Rule 11."
          />
        </div>
        
        <LearningPoint>
          Notice something. Most Emergency Department devices are diagnostic, monitoring, or therapeutic. This explains why Rules 9, 10, and 11 are encountered frequently.
        </LearningPoint>
      </DepartmentSection>

      {/* SECTION 2: ICU */}
      <DepartmentSection title="SECTION 2: Intensive Care Unit (ICU)" icon={HeartPulse}>
        <p className="mb-6">Now we enter the ICU. Patients here are critically ill. Many devices continuously support life.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="6"
            title="Ventilator"
            purpose="Support breathing."
            rule="Rule 9."
          />
          <DeviceCard 
            number="7"
            title="Multiparameter Patient Monitor"
            purpose="Monitor: ECG, Blood Pressure, Oxygen, Respiration."
            rule="Rule 10."
          />
          <DeviceCard 
            number="8"
            title="Syringe Pump"
            purpose="Deliver medicine accurately."
            rule="Rule 11."
          />
          <DeviceCard 
            number="9"
            title="Infusion Pump"
            purpose="Deliver IV fluids."
            rule="Rule 11."
          />
          <DeviceCard 
            number="10"
            title="ICU Bed"
            purpose="Support critically ill patients."
            note="Its classification depends on its intended medical purpose and active functions."
          />
        </div>
        
        <LearningPoint>
          The ICU contains many active medical devices because patient safety depends on continuous monitoring and treatment.
        </LearningPoint>
      </DepartmentSection>

      {/* SECTION 3: OT */}
      <DepartmentSection title="SECTION 3: Operation Theatre (OT)" icon={Syringe}>
        <p className="mb-6">Now we enter the Operating Theatre. Everything is sterile. Every instrument has a specific purpose.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="11"
            title="Scalpel"
            purpose="Cut tissue."
            rule="Rule 6."
          />
          <DeviceCard 
            number="12"
            title="Surgical Forceps"
            purpose="Hold tissue."
            rule="Rule 6."
          />
          <DeviceCard 
            number="13"
            title="Electrosurgical Generator"
            purpose="Cut and coagulate tissue."
            rule="Rule 9."
          />
          <DeviceCard 
            number="14"
            title="Anaesthesia Machine"
            purpose="Deliver anaesthetic gases and support ventilation."
            note="This device requires careful evaluation of its intended purpose and applicable active device rules."
          />
          <DeviceCard 
            number="15"
            title="Surgical Light"
            purpose="Illuminate surgical field."
            note="Classification depends on its intended medical purpose."
          />
        </div>
        
        <LearningPoint>
          The Operating Theatre contains a mixture of transient surgical instruments, active therapeutic devices, monitoring equipment.
        </LearningPoint>
      </DepartmentSection>

      {/* SECTION 4: Radiology */}
      <DepartmentSection title="SECTION 4: Radiology Department" icon={ScanLine}>
        <p className="mb-6">Radiology focuses on diagnosis.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="16"
            title="X-ray Machine"
            purpose="Produce diagnostic images."
            rule="Rule 10."
          />
          <DeviceCard 
            number="17"
            title="CT Scanner"
            purpose="Diagnostic imaging."
            rule="Rule 10."
          />
          <DeviceCard 
            number="18"
            title="MRI Scanner"
            purpose="Diagnostic imaging."
            rule="Rule 10."
          />
          <DeviceCard 
            number="19"
            title="Ultrasound Machine"
            purpose="Diagnostic imaging."
            rule="Rule 10."
          />
          <DeviceCard 
            number="20"
            title="Digital X-ray Detector"
            purpose="Record X-ray images."
            rule="Rule 16."
          />
        </div>
        
        <LearningPoint>
          Almost every major imaging device belongs to the diagnostic category.
        </LearningPoint>
      </DepartmentSection>

      {/* SECTION 5: Cardiology */}
      <DepartmentSection title="SECTION 5: Cardiology Department" icon={Stethoscope}>
        <p className="mb-6">Cardiology combines diagnosis and therapy.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="21"
            title="ECG Machine"
            rule="Rule 10."
          />
          <DeviceCard 
            number="22"
            title="Holter Monitor"
            rule="Rule 10."
          />
          <DeviceCard 
            number="23"
            title="Pacemaker"
            note="Active implantable therapeutic device. Requires evaluation under the applicable implant and active device provisions."
          />
          <DeviceCard 
            number="24"
            title="Coronary Stent"
            note="Long-term implant (Rule 8). Drug-eluting versions also require consideration of Rule 13 principles."
          />
          <DeviceCard 
            number="25"
            title="Defibrillator"
            rule="Rule 9."
          />
        </div>
        
        <LearningPoint>
          Cardiology demonstrates why intended purpose is more important than technology.
        </LearningPoint>
      </DepartmentSection>

      {/* SECTION 6: Orthopaedics */}
      <DepartmentSection title="SECTION 6: Orthopaedics" icon={Bone}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="26"
            title="Hip Implant"
            rule="Rule 8."
          />
          <DeviceCard 
            number="27"
            title="Bone Plate"
            note="Depends on duration and intended use. Temporary fixation devices and permanently implanted devices may fall under different provisions."
          />
          <DeviceCard 
            number="28"
            title="Bone Screw"
            note="Same principle applies as Bone Plate."
          />
          <DeviceCard 
            number="29"
            title="Bone Cement"
            note="If it incorporates an antibiotic, Rule 13 considerations become relevant."
          />
          <DeviceCard 
            number="30"
            title="Arthroscopy Instruments"
            note="Generally transient surgically invasive instruments (Rule 6)."
          />
        </div>
      </DepartmentSection>

      {/* SECTION 7: Dentistry */}
      <DepartmentSection title="SECTION 7: Dentistry" icon={ShieldPlus}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="31"
            title="Dental Chair"
            note="Classification depends on intended medical purpose and active functions."
          />
          <DeviceCard 
            number="32"
            title="Dental Implant"
            rule="Rule 8."
          />
          <DeviceCard 
            number="33"
            title="Dental X-ray Unit"
            rule="Rule 10."
          />
          <DeviceCard 
            number="34"
            title="Scaler"
            note="Often an active therapeutic device. Applicable active device rules should be assessed based on intended use."
          />
          <DeviceCard 
            number="35"
            title="Dental Handpiece"
            note="Classification depends on intended purpose and whether it is active or non-active."
          />
        </div>
      </DepartmentSection>

      {/* SECTION 8: Ophthalmology */}
      <DepartmentSection title="SECTION 8: Ophthalmology" icon={Eye}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="36"
            title="Slit Lamp"
            rule="Rule 10."
          />
          <DeviceCard 
            number="37"
            title="Fundus Camera"
            rule="Rule 10."
          />
          <DeviceCard 
            number="38"
            title="Intraocular Lens"
            rule="Rule 8."
          />
          <DeviceCard 
            number="39"
            title="Excimer Laser"
            note="Therapeutic laser (Rule 9)."
          />
        </div>
      </DepartmentSection>

      {/* SECTION 9: Clinical Lab */}
      <DepartmentSection title="SECTION 9: Clinical Laboratory" icon={Microscope}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="40"
            title="Clinical Chemistry Analyzer"
            rule="Rule 10 (where used for diagnostic purposes)."
          />
          <DeviceCard 
            number="41"
            title="Hematology Analyzer"
            rule="Rule 10."
          />
          <DeviceCard 
            number="42"
            title="Microscope"
            note="Classification depends on its intended medical purpose. A general laboratory microscope may not be a medical device, whereas one specifically intended for in vitro diagnostic use may fall under the relevant regulatory framework."
          />
          <DeviceCard 
            number="43"
            title="Centrifuge"
            note="Its classification depends on intended medical purpose."
          />
        </div>
      </DepartmentSection>

      {/* SECTION 10: CSSD */}
      <DepartmentSection title="SECTION 10: CSSD (Central Sterile Services Department)" icon={Settings}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceCard 
            number="44"
            title="Autoclave"
            rule="Rule 15."
          />
          <DeviceCard 
            number="45"
            title="Washer Disinfector"
            rule="Rule 15."
          />
          <DeviceCard 
            number="46"
            title="Endoscope Reprocessor"
            rule="Rule 15."
          />
        </div>
      </DepartmentSection>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><Table2 className="w-6 h-6 text-indigo-500" /> 30.2 What We Learned From This Hospital Tour</h3>
      <p>Every department has its own pattern of devices.</p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Department</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Most Common Rules</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Emergency</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 9, 10, 11</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">ICU</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 9, 10, 11</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Operation Theatre</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 6, 9, 10</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Radiology</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 10, 16</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Cardiology</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 8, 9, 10, 13</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Orthopaedics</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 6, 7, 8</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Dentistry</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 8, 9, 10</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Ophthalmology</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rules 8, 9, 10</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">Laboratory</td><td className="border border-slate-200 px-4 py-2">Rule 10 (and applicable IVD framework where relevant)</td></tr>
            <tr><td className="border border-slate-200 px-4 py-2 font-medium">CSSD</td><td className="border border-slate-200 px-4 py-2 font-mono text-indigo-600">Rule 15</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3">30.3 The Hospital Classification Challenge</h3>
      <p>Imagine walking through a hospital tomorrow.</p>
      <p>Without reading labels, ask yourself:</p>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 my-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-0 pl-5 text-slate-700">
          <li>Is this device active?</li>
          <li>Is it diagnostic?</li>
          <li>Does it provide therapy?</li>
          <li>Is it invasive?</li>
          <li>Is it implantable?</li>
          <li>Does it administer medicines?</li>
          <li>Does it sterilize other devices?</li>
        </ul>
      </div>
      <p className="font-bold text-slate-800 text-center">Soon, classification becomes second nature.</p>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 30.4 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-6 shadow-sm">
        <p className="text-amber-900 m-0 mb-3">Imagine every hospital department as a different country.</p>
        <p className="text-amber-900 m-0 mb-3">Each country has its own language.</p>
        <ul className="text-amber-900 m-0 mb-4 pl-5 space-y-1">
          <li><strong>Emergency</strong> speaks the language of life-saving therapy.</li>
          <li><strong>Radiology</strong> speaks the language of diagnosis.</li>
          <li><strong>The Operating Theatre</strong> speaks the language of surgery.</li>
          <li><strong>CSSD</strong> speaks the language of sterilization.</li>
        </ul>
        <p className="text-amber-900 m-0 mb-4 font-medium">If you understand the department, you can often predict which classification rules are likely to apply.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic bg-white p-3 rounded shadow-sm text-center border border-amber-100">Remember: "Don't just classify the device. Understand the clinical environment in which it is used."</p>
      </div>

    </div>
  );
}
