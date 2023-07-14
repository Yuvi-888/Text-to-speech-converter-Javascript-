let button=document.querySelector('button')
let speech=new SpeechSynthesisUtterance()
let text_area=document.querySelector('textarea')
let select=document.querySelector('select')

let voices=[]

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice=voices[0]

    voices.forEach((voice,i)=>(
        select.options[i]=new Option(voice.name,i)
    ))
}

select.addEventListener('change', ()=>{
    speech.voice=voices[select.value]
})

button.addEventListener('click', ()=>{
    speech.text=text_area.value
    window.speechSynthesis.speak(speech)
})

