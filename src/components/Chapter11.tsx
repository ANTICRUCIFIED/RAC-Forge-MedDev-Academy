import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, DoorOpen, Clock, AlertCircle, GitBranch, Lightbulb, Check, X, Activity } from 'lucide-react';

export default function Chapter11() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 5 – Invasive Medical Devices Intended to Enter the Body Through a Body Orifice</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Enters the Body Without Surgery"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 5 covers.</li>
          <li>Understand what a body orifice is.</li>
          <li>Understand why body-orifice devices are classified differently from surgically invasive devices.</li>
          <li>Learn why duration of use is one of the biggest factors in Rule 5.</li>
          <li>Understand how risk increases from transient to long-term use.</li>
          <li>Learn why some body-orifice devices become Class A while others become Class B or Class C.</li>
          <li>Learn common examples from hospitals.</li>
          <li>Understand special cases and combination devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.1 Imagine Visiting an ENT Doctor</h3>
      <p>You visit an Ear, Nose and Throat (ENT) specialist. The doctor examines your nose using a nasal endoscope. The instrument enters your nose.</p>
      <p>Did the doctor perform surgery? <strong>No.</strong> The instrument entered through a natural opening.</p>
      
      <p>Now imagine another patient. The patient receives a urinary catheter. Again, the device enters the body. Was surgery performed? <strong>No.</strong> Again, the device entered through a natural opening.</p>
      
      <p>Now imagine a dentist examining your mouth. The dental mirror enters your mouth. No surgery. Again, entry through a natural opening.</p>
      
      <p className="font-semibold text-blue-800">This is exactly the type of device that Rule 5 is designed to address.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><DoorOpen className="w-6 h-6 text-emerald-500" /> 11.2 What Is a Body Orifice?</h3>
      <p>Let's revisit this important term.</p>
      <p><strong>A body orifice is simply a natural opening of the human body through which a medical device may enter.</strong></p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Mouth, Nose, Ear canal, Urethra, Anus, Vagina.</p></div>
      <p className="text-sm text-slate-600 italic">Certain permanent artificial openings, such as a stoma or permanent tracheostomy, are also treated as body orifices under the MDR 2017 definitions.</p>
      <p className="font-medium">Think of these openings as doors that already exist. No surgeon has to create them.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.3 Why Does Rule 5 Exist?</h3>
      <p>Imagine two patients.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Patient A</h5>
          <p className="text-sm text-slate-600 mb-0">A doctor inserts a urinary catheter through the urethra. No incision. No surgical cut.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Patient B</h5>
          <p className="text-sm text-slate-600 mb-0">A surgeon opens the abdomen and inserts a surgical drain. Now surgery is involved.</p>
        </div>
      </div>
      
      <p>Both devices enter the body. However, they enter in completely different ways. The first uses a natural opening. The second requires surgery.</p>
      <p className="font-medium text-slate-800">Because the level of tissue injury and the route of entry are different, the regulatory approach is also different. That is why Rule 5 exists separately from the rules for surgically invasive devices.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.4 Does Every Device Entering Through a Body Orifice Have the Same Risk?</h3>
      <p><strong>No.</strong> Let's compare three examples.</p>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">A dentist places a mouth mirror inside your mouth for two minutes. Very short exposure. Minimal contact.</p>
           <p className="text-sm font-bold text-slate-700 m-0">Very limited opportunity for harm.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">A urinary catheter remains inside the bladder for seven days. Now the situation changes. The device stays inside continuously.</p>
           <p className="text-sm font-bold text-slate-700 m-0">The chance of infection, irritation, or blockage becomes much higher.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">A long-term feeding tube remains in place for several months. The exposure is much longer.</p>
           <p className="text-sm font-bold text-slate-700 m-0">The opportunity for complications increases further.</p>
        </div>
      </div>
      
      <p className="font-bold text-blue-800 bg-indigo-50 p-4 rounded-lg border border-indigo-200">This is why duration of use is one of the most important factors in Rule 5.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Clock className="w-6 h-6 text-amber-500" /> 11.5 Why Does Time Matter So Much?</h3>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6 text-sm text-amber-900">
        <p className="m-0 mb-2">Imagine wearing a wristwatch. If you wear it for five minutes, almost nothing happens.</p>
        <p className="m-0 mb-2">Now wear it every day, day and night, for six months. You may notice skin irritation, sweating, pressure marks.</p>
        <p className="m-0 mb-2">The watch did not become more dangerous. It simply stayed in contact with your body much longer.</p>
        <p className="m-0 font-bold">The same idea applies to invasive medical devices.</p>
      </div>
      
      <p>The longer a device remains inside the body, the greater the opportunity for:</p>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 mb-4">
        <li>infection,</li>
        <li>tissue irritation,</li>
        <li>inflammation,</li>
        <li>material degradation,</li>
        <li>accidental displacement,</li>
        <li>blockage,</li>
        <li>mechanical failure.</li>
      </ul>
      <p className="font-medium text-slate-800">This is why Rule 5 distinguishes between transient, short-term, and long-term use.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.6 Transient Body-Orifice Devices</h3>
      <p>These devices remain in continuous use for <strong>less than 60 minutes</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Dental mirror, Tongue depressor used during examination, Diagnostic nasal endoscope, Temporary suction catheter during a procedure.</p></div>
      <p className="font-medium">Because the exposure is brief, the opportunity for complications is generally lower.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.7 Short-Term Body-Orifice Devices</h3>
      <p>These remain in continuous use for <strong>more than 60 minutes but not more than 30 days</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Urinary catheter, Temporary feeding tube, Nasogastric tube, Rectal tube used during treatment.</p></div>
      <p className="font-medium">The longer contact period increases the possibility of complications.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.8 Long-Term Body-Orifice Devices</h3>
      <p>These remain in continuous use for <strong>more than 30 days</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Long-term tracheostomy tube, Long-term feeding tube, Certain long-term urinary devices.</p></div>
      <p>Long-term exposure requires greater confidence in:</p>
      <ul className="mb-4">
        <li>biocompatibility,</li>
        <li>mechanical reliability,</li>
        <li>durability,</li>
        <li>infection control.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.9 Why Doesn't Every Catheter Have the Same Classification?</h3>
      <p>This is one of the most common questions in regulatory affairs. People often ask: <em>"What class is a catheter?"</em></p>
      <p>The correct answer is: <strong>It depends.</strong></p>
      <p>Why? Because "catheter" is only the name of a product family. Consider these examples:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>Intermittent urinary catheter</li>
        <li>Foley catheter</li>
        <li>Suction catheter</li>
        <li>Cardiac catheter</li>
        <li>Electrophysiology catheter</li>
        <li>Balloon catheter</li>
        <li>Dialysis catheter</li>
      </ul>
      <p>Although all are called catheters, they differ in: intended use, anatomical location, duration of use, design, associated risk.</p>
      <p className="font-bold text-slate-800 bg-slate-50 py-2 px-4 rounded border border-slate-200">Therefore, you cannot classify a device based only on its name.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.10 Special Cases</h3>
      <p>Now let's discuss devices that confuse beginners.</p>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Endoscope</h5>
           <p className="text-sm m-0 text-slate-600 mb-2">An endoscope enters through a body orifice. Does that automatically determine its class? No.</p>
           <p className="text-sm m-0 text-slate-600">You must still ask: What is its intended use? How long is it used? Where is it used? Does it connect to another active medical device? Is it flexible or rigid? Does it deliver energy? Every answer affects the regulatory assessment.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Feeding Tube</h5>
           <p className="text-sm m-0 text-slate-600">Looks like a simple tube. However, it delivers nutrition directly into the gastrointestinal tract. Duration of use becomes extremely important.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Tracheostomy Tube</h5>
           <p className="text-sm m-0 text-slate-600">Although it enters through a tracheostomy (an artificial opening), the MDR 2017 definitions treat certain permanent artificial openings as body orifices. This is why the terminology chapter is important when applying Rule 5.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-indigo-500" /> 11.11 Combination Devices</h3>
      <p>Some body-orifice devices are combined with other technologies.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Video Endoscope. It contains: optical system, camera, LED light source, software, display connection.</p></div>
      <p>Although the device enters through a natural opening, it is also an active medical device because it depends on electrical energy.</p>
      <p className="font-medium text-slate-800">This illustrates an important principle: A device may have several technical features, but regulators classify it according to its overall intended purpose and the applicable classification rules.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 11.12 Common Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Everything entering through the mouth belongs to the same class."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Duration, intended use, and anatomical location all matter.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "A catheter is always Class B."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Different catheters may fall under different classifications depending on the applicable rule.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "If surgery is not involved, the device is low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Some body-orifice devices remain inside the patient for long periods and therefore require greater regulatory scrutiny.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "The product name determines the class."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Intended use determines the classification—not the product name.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 11.13 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Does it enter the body?"]
  N2 --> N3
  N3 -->|NO| N4["See Non-Invasive Rules"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Does it enter through a natural body opening?"]
  N5 --> N6
  N6 -->|NO| N7["See Surgically Invasive Rules"]
  N8["↓"]
  N6 -->|YES| N8
  N9["How long will it remain in continuous use?"]
  N8 --> N9
  N10["↓"]
  N9 -->|Less than 60 minutes - Transient| N10
  N9 -->|60 minutes to 30 days - Short-term| N10
  N9 -->|More than 30 days - Long-term| N10
  N11{"Rule 5: How long will it be used in the body orifice?"}
  N11 -->|Transient - less than 60 minutes| N11A["Rule 5 (Class A)"]
  N11 -->|Short-term - 60 mins to 30 days OR oral/nasal/ear cavity| N11B["Rule 5 (Class B)"]
  N11 -->|Long-term - more than 30 days NOT in oral/nasal/ear cavity| N11C["Rule 5 (Class C)"]
  N10 --> N11
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 11.14 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Think of a visitor entering a house.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">If the visitor comes in for five minutes, the impact is usually small.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">If the visitor stays for two weeks, the situation changes.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">If the visitor moves in permanently, the impact is much greater.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Rule 5 follows the same logic. The longer the device remains inside the body, the greater the opportunity for problems to develop.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.15 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 5 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Dental mirror</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Enters the mouth through a natural opening for a short time</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Diagnostic nasal endoscope</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Enters the nose without surgery</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Enters through the urethra</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Nasogastric tube</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Enters through the nose into the stomach</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Long-term feeding tube</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Body-orifice device with prolonged use</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Surgically invasive device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Bone screw</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Surgically invasive device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Wheelchair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Non-invasive device</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 5 applies to devices that enter the body through a <strong>body orifice, not through surgery</strong>.</li>
          <li>The key concepts are: Route of entry, Intended use, Duration of continuous use.</li>
          <li>Transient, short-term, and long-term use are major factors because longer exposure generally increases the opportunity for complications.</li>
          <li>You should <strong>never classify a device solely by its name</strong>. A "catheter" or an "endoscope" is a product family; the intended use and the specific characteristics determine the applicable classification rule.</li>
          <li>Rule 5 prepares us for the next step: devices that enter the body through surgery, where the potential for tissue injury and other risks becomes even greater.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 12, we will study <strong>Rule 6</strong>, which covers surgically invasive devices intended for <strong>transient use</strong>.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">We'll answer questions such as: Why is surgery itself considered an additional source of risk? Why are reusable surgical instruments treated differently from implants? Why can two instruments used in the same operation have different classifications? What makes a temporary surgical device different from one that remains inside the body?</p>
           <p className="text-sm font-bold text-blue-900 m-0">This chapter will mark the transition from natural-entry devices to devices introduced through surgical procedures, an important distinction in the Medical Devices Rules, 2017.</p>
        </div>
      </div>

    </div>
  );
}
