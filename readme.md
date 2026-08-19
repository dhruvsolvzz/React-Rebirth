What is React ?
reactjs a javascript library use to build a singlepage application


library=> predefine block ofcode that can we use as needed
framework=> structure


real dom => actual Dom 
virtual dom => copy of real dom

reconsilation=> it is a process where virtual dom  compaare/diffing to real dom and whatever changes occur it will render that part 


Export and Import 

Export 

default export -- ek hi default export kar sakte hein

named export -- multiple export kar sakte hein 

agar default export karna hai to  => use - export default

aur named export karna hai toh => function ke aage export lagana hai 





vite => bundler

bundler ->A bundler in React is a development tool that takes your entire application's raw files—including JavaScript components, JSX, TypeScript, CSS, and images—and merges them into a single file or a few optimized files (bundles) that a web browser can easily read and execute.


Batch updating in React is an optimization technique where React groups multiple state updates into a single re-render. This behavior prevents components from undergoing unnecessary intermediate renders, dramatically improving application performance and ensuring a smooth user experience.




REACT HOOKS :==>>

useState -> State Management

useRef -> Actual dom element ko select karne ki power deta hai 
unnecessary reRendes ko rokta jai
Most Optimized

useEffect ->


FORM HANDELING

---React mein Two-Way Binding form handling se samajh sakte hain. Sabse pehle hum form banate hain aur onSubmit ke through ek submit handler attach karte hain. Submit handler mein e.preventDefault() use karke browser ke default page-reload behaviour ko prevent karte hain.

Uske baad har input ke liye ek state banate hain aur input ko value={state} ke through state se connect karte hain. Input mein koi change hone par onChange event trigger hota hai, jo ek handler function ko call karta hai. Handler e.target.value se input ki current value leta hai aur setState() ke through state update karta hai. State update hone ke baad React re-render karta hai aur updated state value={state} ke through input mein reflect hoti hai.

Isi wajah se data input se state mein bhi jaata hai aur state se input mein bhi aata hai — isi flow ko Two-Way Binding kaha jaata hai.
--React Hook Form 
--useRef





----------------------------------------Routing in React-----------------------------------

BrouserRouter =>
History API ka use karta hai Routing karne ke lia aur ye Mainly Brouser Pe routing karne ke lia use hota hai 

useParam ka use karte hein url se parameter nikalne ke lia in react 



