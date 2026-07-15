import { Scale, HeartPulse, AlertTriangle, Battery, ShieldAlert, Cpu } from 'lucide-react';

export default function Chapter2() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <p className="m-0 font-medium text-blue-900 text-lg italic">
          "Not every medical device is equally dangerous. Therefore, not every medical device should be regulated in the same way."
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-800">
          This single idea forms the foundation of the Medical Devices Rules, 2017 (MDR 2017). Under these rules, medical devices are classified into different risk classes based on their intended use and the classification parameters laid down in the First Schedule.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After reading this chapter, you will understand:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Why governments classify medical devices.</li>
          <li>Why all medical devices cannot be treated equally.</li>
          <li>How regulators think before assigning a risk class.</li>
          <li>What "risk" actually means.</li>
          <li>Why some simple-looking devices are high risk.</li>
          <li>Why some complicated-looking machines may not always be the highest risk.</li>
          <li>Why the same product may belong to different risk classes depending on its intended use.</li>
          <li>Why combination and special devices require special consideration.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.1 Imagine a Hospital Without Classification</h3>
      <p>Imagine a hospital has the following medical devices:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        <ul className="m-0">
          <li>Cotton</li>
          <li>Bandages</li>
          <li>Thermometers</li>
          <li>Surgical gloves</li>
        </ul>
        <ul className="m-0">
          <li>Syringes</li>
          <li>Wheelchairs</li>
          <li>Blood pressure monitor</li>
          <li>ECG machine</li>
        </ul>
        <ul className="m-0">
          <li>Infusion pump</li>
          <li>Dialysis machine</li>
          <li>Ventilator</li>
          <li>Artificial heart valve</li>
          <li>Pacemaker</li>
        </ul>
      </div>
      <p>Now ask yourself a simple question.</p>
      <p className="font-semibold text-slate-800">Should every one of these devices undergo exactly the same level of government scrutiny before being sold?</p>
      <p>Most people would say <strong>No</strong>.</p>
      <p><strong>Why?</strong> Because common sense tells us that a cotton bandage and an artificial heart valve do not present the same level of danger.</p>
      <p>This is exactly how regulators think.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.2 Understanding Risk Through Daily Life</h3>
      <p>Let's forget medical devices for a moment. Imagine these four objects.</p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 1 – A Pencil</h5>
          <p className="text-sm mb-2">A pencil breaks. What happens? You simply sharpen another one. No one is injured.</p>
          <div className="bg-green-50 text-green-800 text-xs font-bold px-2 py-1 rounded inline-block uppercase tracking-wider">Very Little Risk</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 2 – A Kitchen Knife</h5>
          <p className="text-sm mb-2">If used carefully, it is safe. If misused, someone can get injured.</p>
          <div className="bg-blue-50 text-blue-800 text-xs font-bold px-2 py-1 rounded inline-block uppercase tracking-wider">Moderate Risk</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 3 – A Motorcycle</h5>
          <p className="text-sm mb-2">When properly maintained, it is generally safe. However, if the brakes fail, serious injury may occur.</p>
          <div className="bg-amber-50 text-amber-800 text-xs font-bold px-2 py-1 rounded inline-block uppercase tracking-wider">Higher Risk</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 4 – An Airplane</h5>
          <p className="text-sm mb-2">It is one of the safest forms of transport because it is designed, tested, inspected, and maintained under extremely strict regulations. Why? Because if something goes wrong, many lives may be affected.</p>
          <div className="bg-red-50 text-red-800 text-xs font-bold px-2 py-1 rounded inline-block uppercase tracking-wider">Very High Risk</div>
        </div>
      </div>
      <p className="font-semibold text-blue-800">Medical devices follow exactly the same philosophy. The greater the possible harm, the greater the regulatory control.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.3 Why Governments Cannot Treat Every Device the Same</h3>
      <p>Suppose the Government decided: <em>"Every medical device must undergo ten years of testing before approval."</em></p>
      <p>What would happen? Even a simple adhesive bandage would require:</p>
      <ul>
        <li>Clinical investigations</li>
        <li>Extensive documentation</li>
        <li>Multiple inspections</li>
        <li>Long approval timelines</li>
        <li>High regulatory costs</li>
      </ul>
      <p>Eventually, the cost of a ₹10 bandage might increase several times over. Patients would suffer. Hospitals would suffer. Manufacturers would struggle to introduce useful low-risk products.</p>
      
      <p>Now imagine the opposite situation. Suppose the Government required almost no evaluation for implantable heart valves or pacemakers. Patients could be exposed to unsafe products with life-threatening consequences.</p>
      <p className="font-semibold">Neither extreme is acceptable. Therefore, regulators apply controls that are proportionate to the level of risk.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.4 What Does "Risk" Mean?</h3>
      <p>Many people think risk means <em>"Something dangerous."</em> That is only partly correct.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6 flex items-start gap-4">
        <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm hidden sm:block">
          <Scale className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-2 mt-0">In regulatory science, Risk means:</h4>
          <p className="m-0 text-slate-700">The combination of the <strong>likelihood</strong> that harm will occur and the <strong>seriousness</strong> of that harm if it does occur.</p>
        </div>
      </div>

      <p>In simple words, Risk answers two questions:</p>
      <ol>
        <li>How likely is something to go wrong?</li>
        <li>If it goes wrong, how serious will the consequences be?</li>
      </ol>
      <p>Both questions matter.</p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 1: Disposable Examination Gloves</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>Could they tear? <strong>Yes.</strong></li>
            <li>Could someone be harmed? <strong>Possibly.</strong></li>
            <li>Would it usually threaten life? <strong>No.</strong></li>
          </ul>
          <p className="text-sm font-semibold m-0 text-green-700">Overall risk → Low.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 2: Ventilator</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>Could it fail? <strong>Very rarely.</strong></li>
            <li>But if it fails while supporting a critically ill patient, the consequences may be <strong>life-threatening.</strong></li>
          </ul>
          <p className="text-sm font-semibold m-0 text-red-700">Overall risk → High.</p>
        </div>
      </div>

      <p>Notice something important: The ventilator may fail less often than the glove tears, yet it is considered much higher risk because the consequences of failure are far more severe. This is why regulators evaluate both probability and severity.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.5 What Do Regulators Think About?</h3>
      <p>When regulators receive a new medical device, they do not begin by asking, <em>"What is the product called?"</em> Instead, they ask questions such as:</p>
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg my-6">
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 m-0 text-sm">
          <li>What is the device intended to do?</li>
          <li>Who will use it?</li>
          <li>Which patient population will use it?</li>
          <li>Does it contact the patient?</li>
          <li>Does it enter the body?</li>
          <li>If yes, how does it enter?</li>
          <li>Does it remain inside the body?</li>
          <li>For how long?</li>
          <li>Does it use electricity?</li>
          <li>Does it deliver energy?</li>
          <li>Does it deliver medicine?</li>
          <li>Does it emit radiation?</li>
          <li>Could it support or sustain life?</li>
          <li>Could failure lead to serious injury or death?</li>
        </ul>
      </div>
      <p>The answers to these questions determine which classification rule applies under the First Schedule.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.6 Appearance Does NOT Decide Risk</h3>
      <p>This is one of the biggest misconceptions among beginners. People often assume: "Large machine = High Risk" or "Small product = Low Risk". This is not always true.</p>

      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-blue-50 p-3 rounded-full mb-3">
             <ShieldAlert className="w-6 h-6 text-blue-600" />
          </div>
          <h5 className="font-bold text-slate-800 mb-2">A Hospital Bed</h5>
          <p className="text-sm mb-0">Very large. Very heavy. Very expensive.<br/><br/><strong>Usually lower risk</strong> than many implantable devices.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-red-50 p-3 rounded-full mb-3">
             <HeartPulse className="w-6 h-6 text-red-600" />
          </div>
          <h5 className="font-bold text-slate-800 mb-2">Heart Valve</h5>
          <p className="text-sm mb-0">Very small. Fits in your hand.<br/><br/>But once implanted, failure may immediately threaten life. Therefore, it is <strong>much higher risk</strong>.</p>
        </div>
      </div>
      <p className="font-medium text-slate-800">The lesson is simple. Size never determines risk. Appearance never determines risk. Price never determines risk. Only the regulatory criteria determine the classification.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.7 Complexity Does NOT Always Mean Higher Risk</h3>
      <p>Another common misunderstanding is: <em>"More complicated means higher class."</em> Not always. Consider these examples.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">MRI Scanner</h5>
          <p className="text-sm mb-2">Extremely complicated. Thousands of components. Sophisticated software. Powerful magnets.</p>
          <p className="text-sm mb-0">Despite its complexity, it is not implanted in the body and its classification depends on its intended use and applicable rules—not simply on the fact that it is technologically advanced.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Orthopedic Bone Screw</h5>
          <p className="text-sm mb-2">Looks extremely simple. Just a metal screw.</p>
          <p className="text-sm mb-0">However, it is implanted inside the patient's body. If it breaks, serious complications may occur. Therefore, its risk may be much higher than many devices that look more complicated.</p>
        </div>
      </div>
      <p className="font-semibold text-center text-blue-800 bg-blue-50 py-2 rounded-lg border border-blue-200">Never judge a medical device by its appearance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.8 One Device Can Have Different Risk Classes</h3>
      <p>This surprises many people. The same basic product may belong to different classes. Why? Because classification depends primarily on <strong>intended use</strong> and the applicable classification rules, not only on the product name.</p>

      <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
         <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
            <h5 className="font-bold text-slate-800 m-0">Example: Laser</h5>
         </div>
         <div className="p-5 grid sm:grid-cols-2 gap-4 bg-white">
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">Intended Use A:</p>
              <p className="text-sm text-slate-600 m-0">One manufacturer develops it for <strong>Hair removal</strong>.</p>
            </div>
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">Intended Use B:</p>
              <p className="text-sm text-slate-600 m-0">Another develops a similar technology for <strong>Eye surgery</strong>.</p>
            </div>
         </div>
         <div className="bg-slate-50 px-5 py-3 border-t border-slate-200">
            <p className="text-sm m-0">Although both products use lasers, their intended medical purpose is different. The potential harm is different. The applicable classification rule may therefore be different.</p>
         </div>
      </div>

      <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
         <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
            <h5 className="font-bold text-slate-800 m-0">Example: Software</h5>
         </div>
         <div className="p-5 grid sm:grid-cols-2 gap-4 bg-white">
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">App A:</p>
              <p className="text-sm text-slate-600 m-0">One software program reminds patients to drink water.</p>
            </div>
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">App B:</p>
              <p className="text-sm text-slate-600 m-0">Another software program analyses ECG signals and helps detect heart rhythm abnormalities.</p>
            </div>
         </div>
         <div className="bg-slate-50 px-5 py-3 border-t border-slate-200">
            <p className="text-sm m-0">The first is unlikely to be regulated as a medical device. The second may be a medical device because its intended purpose is diagnosis. Again, <strong>the intended use is what matters</strong>.</p>
         </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.9 Special and Combination Medical Devices</h3>
      <p>This topic often confuses beginners. Let's understand it with simple examples.</p>
      
      <h4 className="text-lg font-semibold mt-6 mb-2">What Is a Combination Device?</h4>
      <p>Imagine buying a smartphone. Inside one device, you have: Camera, GPS, Flashlight, Calculator, Music player, Internet browser. Although it is one product, it performs many different functions. Some medical devices are similar.</p>

      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example: Drug-Eluting Coronary Stent</h5>
          <p className="text-sm mb-2">What does it do? It has:</p>
          <ul className="text-sm m-0 pl-4 mb-3 text-slate-600">
            <li>A metal stent that keeps the artery open.</li>
            <li>A medicine coated on the stent that is slowly released to reduce the chance of the artery becoming blocked again.</li>
          </ul>
          <p className="text-sm mb-1 font-medium">Is it a medicine? Yes, in one sense.</p>
          <p className="text-sm mb-0 font-medium">Is it also a medical device? Yes.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Battery className="w-4 h-4"/> Example: Powered Prosthetic Limb</h5>
          <p className="text-sm mb-2">It contains:</p>
          <ul className="text-sm m-0 pl-4 mb-3 text-slate-600">
            <li>Mechanical components & Electric motors</li>
            <li>Sensors, Software, Batteries</li>
          </ul>
          <p className="text-sm mb-0">Although it replaces a missing limb, its performance depends on multiple interacting systems.</p>
        </div>
      </div>

      <p className="font-medium">The important point is this: Regulators do not classify these devices simply because they are "combination products." They evaluate how the device is intended to work, what its primary medical purpose is, and what level of risk it presents.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.10 Special Medical Devices</h3>
      <p>Some devices receive special attention because they interact with the body in ways that may increase risk. Examples include:</p>
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg my-6">
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 m-0 text-sm">
          <li>Implantable devices</li>
          <li>Life-supporting devices</li>
          <li>Life-sustaining devices</li>
          <li>Devices that emit ionizing radiation</li>
          <li>Devices containing biological materials</li>
          <li>Devices incorporating medicinal substances</li>
          <li>Devices used in the central circulatory system</li>
          <li>Devices used in the central nervous system</li>
          <li>Sterile devices</li>
          <li>Measuring devices</li>
          <li>Active implantable devices</li>
        </ul>
      </div>
      <p>Each of these categories has unique regulatory considerations because the potential consequences of failure may differ from those of ordinary devices. Do not worry if these terms seem unfamiliar right now. Each one will be explained in its own chapter with diagrams, everyday analogies, and practical examples.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.11 Why Does MDR 2017 Use a Risk-Based System?</h3>
      <p>The Medical Devices Rules, 2017 do not assume that all devices are equally risky. Instead, they establish a framework where classification is based on:</p>
      <ul>
        <li>Intended use</li>
        <li>Degree of invasiveness</li>
        <li>Duration of contact with the body</li>
        <li>Whether the device is active or non-active</li>
        <li>Whether it is implantable</li>
        <li>The potential risk to the patient</li>
        <li>Other parameters described in the First Schedule.</li>
      </ul>
      <p className="font-semibold text-blue-800">This ensures that regulatory requirements are proportionate to the level of risk.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">2.12 Key Takeaways</h3>
      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 mb-8">
        <ul className="text-slate-200 space-y-2 mb-0">
          <li>Risk-based classification exists to protect patients while avoiding unnecessary regulation of low-risk devices.</li>
          <li>Risk is based on both the <strong>likelihood of harm</strong> and the <strong>seriousness of harm</strong>.</li>
          <li>The name, size, price, or complexity of a device does not by itself determine its class.</li>
          <li>The <strong>intended use</strong> of a device is one of the most important factors in classification.</li>
          <li>Some products combine multiple technologies (such as a device with a medicinal component), and these require careful regulatory assessment.</li>
          <li>Special categories of devices—such as implants, life-supporting devices, and active devices—will be explained in detail in later chapters before we study the individual classification rules.</li>
        </ul>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-8 flex items-start gap-4">
        <Cpu className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
        <div>
           <h4 className="text-amber-900 font-bold m-0 mb-1">Author's Note</h4>
           <p className="text-amber-800 text-sm m-0 leading-relaxed">
             Before we begin Rule 1 in the next chapter, we will first build a complete understanding of the terminology used throughout the First Schedule, because terms such as non-invasive, body orifice, transient use, short-term use, implantable device, and active therapeutic device are essential to understanding the classification rules correctly. This foundation will make the 16 rules much easier to understand.
           </p>
        </div>
      </div>

    </div>
  );
}
