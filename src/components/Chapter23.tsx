import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Camera, Image, AlertTriangle, GitBranch, Lightbulb, Check, X } from 'lucide-react';

export default function Chapter23() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 23</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 16 – Medical Devices Specifically Intended for Recording Diagnostic X-Ray Images</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Capturing the Image Is Just as Important as Producing It"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 16 covers.</li>
          <li>Learn what image recording means.</li>
          <li>Understand the difference between producing an X-ray and recording it.</li>
          <li>Learn why image quality is important.</li>
          <li>Understand how digital technology has changed radiology.</li>
          <li>Learn common examples.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Camera className="w-6 h-6 text-indigo-500" /> 23.1 Imagine Visiting a Hospital</h3>
      <p>A patient falls from a motorcycle. The doctor suspects a broken bone. The patient is sent for an X-ray.</p>
      <p>Inside the X-ray room, the machine produces X-rays.</p>
      <p>But something else is also required. The image must be:</p>
      <ul className="mb-4">
        <li>captured,</li>
        <li>recorded,</li>
        <li>stored,</li>
      </ul>
      <p>so that the doctor can examine it.</p>
      <p className="font-bold text-slate-800">Without recording, the X-ray examination would be useless.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.2 Producing an Image vs Recording an Image</h3>
      <p>Many beginners think the X-ray machine does everything. Actually, there are two separate functions.</p>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Step 1</p>
          <p className="text-sm text-slate-600 m-0">The X-ray system generates X-rays. These X-rays pass through the patient's body. Different tissues absorb different amounts of radiation.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Step 2</p>
          <p className="text-sm text-slate-600 m-0">The remaining X-rays reach an image receptor. This receptor records the image. Only then can the doctor view it.</p>
        </div>
      </div>
      <p>Think of it like taking a photograph. A camera lens collects light, but the image sensor records the picture. Without the sensor, there would be no photograph.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.3 Why Image Recording Is Important</h3>
      <p>Imagine taking a family photograph. The people are standing perfectly. The lighting is excellent. But the camera memory card is damaged. No photograph is saved. The moment is lost.</p>
      <p>Medical imaging works the same way. Even if the X-ray generator works perfectly, a poor image-recording system may result in:</p>
      <ul className="mb-4 grid grid-cols-2">
        <li>blurred images</li>
        <li>missing details</li>
        <li>incorrect diagnosis</li>
        <li>repeat X-ray examinations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.4 Why Repeat Examinations Matter</h3>
      <p>Suppose the recorded image is unclear. The doctor cannot confidently determine whether a fracture is present. The patient may need another X-ray.</p>
      <p>This creates problems such as:</p>
      <ul className="mb-4">
        <li>additional radiation exposure,</li>
        <li>extra time,</li>
        <li>increased cost,</li>
        <li>delayed treatment.</li>
      </ul>
      <p className="font-medium text-slate-800">Therefore, high-quality image recording directly contributes to patient safety.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Image className="w-6 h-6 text-emerald-500" /> 23.5 Traditional X-Ray Film</h3>
      <p>For many years, hospitals used photographic X-ray films. The X-rays exposed the film, which was then developed using chemicals.</p>
      <p>The developed film became the permanent diagnostic image.</p>
      <p className="font-medium text-slate-800">Although many hospitals have now moved to digital systems, understanding film-based recording helps explain why Rule 16 was created.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.6 Modern Digital Imaging</h3>
      <p>Today, many hospitals use digital image receptors. Examples include:</p>
      <ul className="mb-4">
        <li>Computed Radiography (CR) plates</li>
        <li>Digital Radiography (DR) detectors</li>
        <li>Flat-panel detectors</li>
      </ul>
      <p>These systems convert X-ray energy into digital images that can be viewed immediately on a computer.</p>
      <p>Digital technology has improved: image quality, storage, sharing, and workflow.</p>
      <p className="font-bold text-slate-800">However, the need for accurate image recording remains unchanged.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.7 What Makes a Good Diagnostic Image?</h3>
      <p>A useful diagnostic image should have:</p>
      <ul className="mb-4 grid grid-cols-2">
        <li>sufficient sharpness</li>
        <li>appropriate contrast</li>
        <li>low noise</li>
        <li>correct exposure</li>
        <li>minimal distortion</li>
      </ul>
      <p className="font-medium text-slate-800">If any of these are poor, important clinical findings may be missed.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.8 Real-Life Example</h3>
      <p>Imagine two chest X-rays.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Image A</p>
          <p className="text-sm text-slate-600 m-0">Clear. The doctor easily identifies pneumonia.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Image B</p>
          <p className="text-sm text-slate-600 m-0">Blurred. The lungs cannot be evaluated properly.</p>
        </div>
      </div>
      <p className="font-medium text-slate-800">The patient is recalled for another examination. The second image exposes the patient to additional radiation that might have been avoided if the first image had been adequate.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.9 Image Storage</h3>
      <p>Recording is not only about capturing the image. Hospitals must also store images safely.</p>
      <p>Modern systems often use:</p>
      <ul className="mb-4">
        <li>PACS (Picture Archiving and Communication System)</li>
        <li>Hospital information systems</li>
        <li>Secure digital storage</li>
      </ul>
      <p>This allows doctors to compare today's image with earlier examinations.</p>
      <p className="font-medium text-slate-800">Although these systems support imaging workflows, not every software or storage system is itself classified under Rule 16; the applicable classification depends on its intended medical purpose.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.10 Quality Assurance</h3>
      <p>Hospitals regularly check imaging systems to ensure that: images remain accurate, detectors function correctly, calibration is maintained, damaged detectors are replaced, image quality remains consistent.</p>
      <p className="font-medium text-slate-800">These activities help maintain reliable diagnostic performance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.11 Important Regulatory Considerations</h3>
      <p>For Rule 16 devices, regulators consider questions such as:</p>
      <ul className="mb-4">
        <li>Does the device accurately record diagnostic X-ray images?</li>
        <li>Is image quality maintained?</li>
        <li>Does the device function consistently?</li>
        <li>Could failure affect diagnosis?</li>
        <li>Does the device contribute to unnecessary repeat imaging?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500" /> 23.12 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "The X-ray machine alone creates the diagnosis."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Without proper image recording, the doctor cannot reliably interpret the examination.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Digital imaging removed the need for Rule 16."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Although technology has changed, accurate recording of diagnostic images remains essential.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Blurry images only affect convenience."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Poor image quality may delay diagnosis, lead to repeat examinations, or cause important findings to be overlooked.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Every computer used in radiology belongs to Rule 16."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Classification depends on the intended medical purpose of the device or software.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 23.13 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Is it specifically intended to record diagnostic X-ray images?"]
  N2 --> N3
  N3 -->|NO| N4["Apply standard rules"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Does image quality affect diagnosis?"]
  N5 --> N6
  N6 -->|NO| N7["Re-evaluate intended purpose"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Consider Rule 16 (Class B)"]
  N8 --> N9
  N10["↓"]
  N9 --> N10
  N11["Evaluate: Image quality, Recording accuracy, Reliability, Diagnostic performance"]
  N10 --> N11
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 23.14 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine writing an important examination. You answer every question correctly. But your answer sheet is never collected.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Your knowledge cannot be evaluated.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Similarly, the X-ray machine may generate excellent X-rays, but without proper image recording, the diagnostic information is lost.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "Producing the image is only half the job. Recording it correctly completes the diagnosis."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.15 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 16 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Digital X-ray Detector</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Records diagnostic X-ray images</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Computed Radiography (CR) Plate</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Captures X-ray image for diagnosis</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Flat-Panel X-ray Detector</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Digital image recording device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Traditional X-ray Film</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Records diagnostic X-ray image</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">X-ray Generator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Produces X-rays rather than recording the image (considered under other applicable rules)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">MRI Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Does not use X-rays</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ultrasound Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Uses sound waves rather than X-rays</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 16 applies to medical devices specifically intended for recording diagnostic X-ray images.</li>
          <li>Recording an image is different from generating X-rays.</li>
          <li>Poor image recording can lead to: repeat examinations, additional radiation exposure, delayed diagnosis, reduced diagnostic confidence.</li>
          <li>Modern digital technology has changed how images are recorded, but not why accurate recording is essential.</li>
        </ul>
        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 mt-4">
           <p className="font-bold text-blue-400 mt-0 mb-2">Always ask:</p>
           <ul className="text-sm text-slate-300 space-y-1 mb-0">
             <li>Is the device specifically intended to record diagnostic X-ray images?</li>
             <li>Does image quality directly influence diagnosis?</li>
             <li>Could failure require repeat imaging or affect patient care?</li>
           </ul>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 my-8 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-emerald-900 mt-0 mb-4">🎉 Congratulations — You Have Completed All 16 Classification Rules of MDR 2017</h3>
        <p className="text-emerald-800 text-lg mb-6 font-medium">You have now covered, in plain language:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm">
            <h4 className="font-bold text-emerald-800 mt-0 mb-2 border-b border-emerald-100 pb-2">Part I – Foundations</h4>
            <p className="text-sm text-slate-600 m-0">Chapter 1–10: Medical device basics, terminology, risk, and classification concepts</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm">
            <h4 className="font-bold text-emerald-800 mt-0 mb-2 border-b border-emerald-100 pb-2">Part II – Non-Invasive Devices</h4>
            <ul className="text-sm text-slate-600 m-0 space-y-1 pl-4">
              <li>Rule 1</li>
              <li>Rule 2</li>
              <li>Rule 3</li>
              <li>Rule 4</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm">
            <h4 className="font-bold text-emerald-800 mt-0 mb-2 border-b border-emerald-100 pb-2">Part III – Invasive Devices</h4>
            <ul className="text-sm text-slate-600 m-0 space-y-1 pl-4">
              <li>Rule 5</li>
              <li>Rule 6</li>
              <li>Rule 7</li>
              <li>Rule 8</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm">
            <h4 className="font-bold text-emerald-800 mt-0 mb-2 border-b border-emerald-100 pb-2">Part IV – Active Medical Devices</h4>
            <ul className="text-sm text-slate-600 m-0 space-y-1 pl-4">
              <li>Rule 9</li>
              <li>Rule 10</li>
              <li>Rule 11</li>
              <li>Rule 12</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-sm md:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-emerald-800 mt-0 mb-2 border-b border-emerald-100 pb-2">Part V – Special Rules</h4>
            <ul className="text-sm text-slate-600 m-0 space-y-1 pl-4">
              <li>Rule 13</li>
              <li>Rule 14</li>
              <li>Rule 15</li>
              <li>Rule 16</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
