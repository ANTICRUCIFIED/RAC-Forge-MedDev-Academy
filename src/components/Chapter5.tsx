import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit, MultiSplit } from "./FlowchartElements";
import { ArrowDown, CornerDownRight, ShieldCheck, UserX, UserCheck, Layers, GitBranch, AlertCircle, Lightbulb } from 'lucide-react';

export default function Chapter5() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what a non-invasive medical device is.</li>
          <li>Understand why non-invasive devices are divided into four different rules.</li>
          <li>Learn how regulators think while classifying non-invasive devices.</li>
          <li>Identify the different categories of non-invasive devices.</li>
          <li>Understand why some non-invasive devices are Class A while others may become Class B, C, or D.</li>
          <li>Learn the decision-making process before applying Rules 1–4.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">5.1 Why Are We Studying Non-Invasive Devices First?</h3>
      <p>Imagine entering a hospital for the first time. You see hundreds of medical devices.</p>
      <ul>
        <li>Some devices are touching patients.</li>
        <li>Some devices are inside patients.</li>
        <li>Some devices are simply lying on tables.</li>
        <li>Some are carrying blood.</li>
        <li>Some are cleaning blood.</li>
        <li>Some are treating wounds.</li>
        <li>Some are implanted inside the body.</li>
      </ul>
      <p>How can anyone classify all of them? The answer is very simple. The regulators first divide medical devices into two broad families.</p>
      
      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-blue-50 p-3 rounded-full mb-3">
             <UserX className="w-6 h-6 text-blue-600" />
          </div>
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Family 1: Non-Invasive Devices</h5>
          <p className="text-sm mb-0">These devices remain <strong>outside</strong> the body.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <div className="bg-red-50 p-3 rounded-full mb-3">
             <UserCheck className="w-6 h-6 text-red-600" />
          </div>
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Family 2: Invasive Devices</h5>
          <p className="text-sm mb-0">These devices <strong>enter</strong> the body.</p>
        </div>
      </div>
      <p>This division makes classification much easier. Think of it as sorting books in a library. Before arranging books, you first separate them into Science, History, Literature, Mathematics. Similarly, medical devices are first separated into broad groups before applying detailed classification rules.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3">5.2 What Exactly Is a Non-Invasive Device?</h3>
      <p>A non-invasive medical device is a medical device that <strong>does not penetrate inside the human body</strong>.</p>
      <p>It may:</p>
      <ul>
        <li>touch the patient's skin,</li>
        <li>support the patient's body,</li>
        <li>protect the patient,</li>
        <li>assist the patient,</li>
      </ul>
      <p>but it <strong>does not enter the body</strong> through a natural opening or by surgery.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-slate-800 mb-2 mt-0">Imagine Wearing Clothes</h4>
        <p className="text-sm text-slate-700 m-0 mb-3">Think about wearing a shirt, gloves, shoes, spectacles. All these things touch your body. None of them enter your body.</p>
        <p className="text-sm text-slate-700 m-0">Medical devices can behave in the same way. A wheelchair supports you. A blood pressure cuff wraps around your arm. A neck collar supports your neck. All remain outside your body. This is the basic idea of a non-invasive medical device.</p>
      </div>


      <h3 className="text-xl font-semibold mt-8 mb-3">5.3 Does Touching the Body Mean the Device Is Invasive?</h3>
      <p>This is probably the most common misunderstanding among beginners. The answer is: <strong>No.</strong></p>
      <p>Touching the body is not the same as entering the body. Let us understand this using three examples.</p>
      
      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 1: Stethoscope</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>Does it touch your body? <strong>Yes.</strong></li>
            <li>Does it enter your body? <strong>No.</strong></li>
          </ul>
          <p className="text-sm font-semibold m-0 text-blue-700">Therefore: Non-invasive</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 2: BP Cuff</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>Does it touch your body? <strong>Yes.</strong></li>
            <li>Does it enter your body? <strong>No.</strong></li>
          </ul>
          <p className="text-sm font-semibold m-0 text-blue-700">Therefore: Non-invasive</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Example 3: Urinary Catheter</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>Does it touch your body? <strong>Yes.</strong></li>
            <li>Does it enter your body? <strong>Yes.</strong></li>
          </ul>
          <p className="text-sm font-semibold m-0 text-red-700">Therefore: Invasive</p>
        </div>
      </div>
      <p className="font-semibold text-center text-red-800 bg-red-50 py-2 rounded-lg border border-red-200">Notice the difference. The word invasive does not mean "touching." It means "entering."</p>


      <h3 className="text-xl font-semibold mt-8 mb-3">5.4 Why Didn't MDR Simply Put All Non-Invasive Devices Into One Class?</h3>
      <p>This is an excellent question. Imagine three different products.</p>
      <div className="grid sm:grid-cols-3 gap-4 my-6">
         <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Product A: Wheelchair</h5>
            <p className="text-sm m-0">Supports the patient. If it suddenly stops, the patient can usually get another one. Risk exists, but it is relatively limited.</p>
         </div>
         <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Product B: Blood Storage Bag</h5>
            <p className="text-sm m-0">Stores blood for transfusion. If contamination occurs, the receiving patient could become seriously ill. It never enters the body, yet it directly affects patient safety.</p>
         </div>
         <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Product C: Dialysis Filter</h5>
            <p className="text-sm m-0">Cleans the patient's blood. It never enters the body, but blood continuously passes through it. If it fails, serious harm may occur.</p>
         </div>
      </div>
      <p>All three stay outside the body. All three are non-invasive. So should they all belong to the same class? <strong>No.</strong></p>
      <p>Why? Because they perform completely different jobs.</p>
      <p className="font-semibold text-blue-800">Now we understand why all non-invasive devices cannot be treated equally. Although none of these devices enters the body, their risks are very different. That is why the First Schedule divides non-invasive devices into four separate classification rules.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Layers className="w-6 h-6 text-indigo-600"/> 5.5 The Four Types of Non-Invasive Devices</h3>
      <p>The Medical Devices Rules do not treat every non-invasive device the same way. Instead, they consider what the device actually does. The four broad groups are:</p>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex items-start gap-4">
           <div className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded">1</div>
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Devices that only come into contact with intact skin or remain external.</h5>
             <p className="text-sm text-slate-600 mb-2">These are generally the simplest non-invasive devices.</p>
             <p className="text-sm font-medium m-0">Examples: Hospital bed, Wheelchair, Walking frame, Crutches, External splints.</p>
           </div>
        </div>
        
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex items-start gap-4">
           <div className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded">2</div>
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Devices that channel or store substances.</h5>
             <p className="text-sm text-slate-600 mb-2">Although these devices stay outside the body, they handle materials that will eventually reach the patient.</p>
             <p className="text-sm font-medium m-0">Examples: IV administration tubing, Blood administration sets, Reservoir bags, Storage containers used in therapy.</p>
           </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex items-start gap-4">
           <div className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded">3</div>
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Devices that modify blood, body fluids, tissues, or other substances before administration.</h5>
             <p className="text-sm text-slate-600 mb-2">These devices perform an important function that can directly influence patient safety.</p>
             <p className="text-sm font-medium m-0">Examples: Blood filters, Dialysis filters, Blood warmers, Leukocyte filters.</p>
           </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex items-start gap-4">
           <div className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded">4</div>
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Devices that come into contact with injured skin.</h5>
             <p className="text-sm text-slate-600 mb-2">Healthy skin acts as a natural protective barrier. When the skin is injured, that protection is reduced. As a result, devices used on injured skin often require closer regulatory consideration than those used on intact skin.</p>
             <p className="text-sm font-medium m-0">Examples: Burn dressings, Advanced wound dressings, Hydrogel dressings, Negative pressure wound dressing systems.</p>
           </div>
        </div>
      </div>


      <h3 className="text-xl font-semibold mt-8 mb-3">5.6 Think Like a Regulator</h3>
      <p>Imagine you are reviewing a new product. A manufacturer submits a file. The product is a medical device.</p>
      <p>The first question is <strong>not</strong> <em>"What class is it?"</em></p>
      <p>Instead, the first question is <strong>"Does it enter the patient's body?"</strong></p>
      <p>If the answer is "No", then you continue with another question: <strong>"What exactly does it do?"</strong></p>
      <ul className="mb-4">
        <li>Does it simply support the patient?</li>
        <li>Does it store blood?</li>
        <li>Does it filter blood?</li>
        <li>Does it treat wounds?</li>
      </ul>
      <p className="font-semibold text-blue-800">The answer determines which of the four non-invasive rules should be examined. This step-by-step approach helps ensure that classification is based on function and risk, not on assumptions.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 5.7 Decision Tree for Non-Invasive Devices</h3>
      
      <InteractiveFlowchart minHeight="450px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Device Under Review" />
          <Arrow />
          <DecisionNode text="Does the device enter the body?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <div className="bg-amber-50 border-2 border-amber-400 text-amber-950 p-4 rounded-xl font-bold text-center max-w-[200px] text-xs shadow-sm">
                Invasive Device (Rules v - xi) &rarr; Skip to Invasive Section
              </div>
            }
            rightChild={
              <MultiSplit
                branches={[
                  {
                    label: "Skin Contact / External",
                    child: (
                      <OutcomeCard
                        clazz="A"
                        subpart="Rule 1"
                        title="Rule (i)"
                        examples={["Intact skin contacts", "Support hardware"]}
                      />
                    )
                  },
                  {
                    label: "Channel / Store / Transport",
                    child: (
                      <OutcomeCard
                        clazz="B"
                        subpart="Rule 2"
                        title="Rule (ii)"
                        examples={["Gravity lines", "Fluid reservoirs"]}
                      />
                    )
                  },
                  {
                    label: "Modify Fluids / Injured Skin",
                    child: (
                      <OutcomeCard
                        clazz="C"
                        subpart="Rule 3 & 4"
                        title="Rule (iii) / Rule (iv)"
                        examples={["Active modification", "Wounds"]}
                      />
                    )
                  }
                ]}
              />
            }
          />
        </div>
      </InteractiveFlowchart>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 5.10 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-xl font-bold text-amber-900 m-0 italic">"Non-invasive does not mean non-risk."</p>
        <p className="text-sm text-amber-800 mt-2 mb-0">A device may stay completely outside the body, yet it can still influence the patient's health in a significant way. That is why the First Schedule divides non-invasive devices into four different rules instead of treating them all alike.</p>
      </div>


      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should understand:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>A non-invasive medical device does not enter the body.</li>
          <li>Touching the skin is not the same as penetrating the body.</li>
          <li>Not all non-invasive devices present the same level of risk.</li>
          <li>The First Schedule therefore separates non-invasive devices into four categories based on their intended purpose:
             <ul className="mt-2 mb-0 space-y-1">
               <li>Contact with intact skin or external support (Rule 1)</li>
               <li>Channeling or storing substances (Rule 2)</li>
               <li>Modifying blood or body fluids (Rule 3)</li>
               <li>Contact with injured skin (Rule 4)</li>
             </ul>
          </li>
          <li>Classification is driven by what the device is intended to do, not merely by where it is located.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 6, we will begin <strong>Rule 1</strong> in detail. Instead of simply stating the rule, we will answer questions such as:</p>
           <ul className="text-sm text-slate-300 m-0 space-y-1">
             <li>Why does Rule 1 exist?</li>
             <li>What does "intact skin" really mean?</li>
             <li>Why is intact skin so important in risk classification?</li>
             <li>What happens if the skin is damaged?</li>
             <li>Why is a wheelchair generally treated differently from a wound dressing?</li>
             <li>Can a non-invasive device ever become high risk even if it only touches the skin?</li>
           </ul>
           <p className="text-sm text-slate-300 m-0 mt-3">We will also classify 30–40 real-world examples using Rule 1 and explain every decision in plain language. This will help readers learn not just the rule itself, but how to apply it confidently.</p>
        </div>
      </div>

    </div>
  );
}
