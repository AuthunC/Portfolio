const bodyEl = document.body
const barEl = document.querySelector('.bar')
const updateBar = () => {
let scrollPos =
	(window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100
	barEl.style.width = `${scrollPos}%`
	requestAnimationFrame(updateBar)
}
updateBar()

let stars = document.querySelectorAll(".stars i");
let msg = document.querySelector("#msg");
stars.forEach((star, index1) => {
	star.addEventListener("click", () => {
		stars.forEach((star, index2) => {
			if(index1 >= index2){
				star.classList.add("color-star");
				msg.innerHTML="Thank you ";
			}
			else{
				star.classList.remove("color-star");
			}
		})
	})
})
document.getElementById("button").addEventListener("click",feedBack)
function feedBack(){
	const feedback=document.getElementById("subject").value
	const feed=document.getElementById("feed1");
	feed.innerHTML=feedback;
	feed.style.opacity=1;
	alert("Thank You for your feedback");
}
