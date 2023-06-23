//your JS code here. If required.
const button=document.getElementById("remove-btn");

const colourSelector=document.getElementById("colorSelect");

button.addEventListener("click",removeElement);

function removeElement(){
	const val=colourSelector.value;

	if(colourSelector.children){
		for(let i=0;i<colourSelector.children.length;i++){
			if(colourSelector.children[i].innerHTML===val){
				colourSelector.removeChild(colourSelector.children[i]);
			}
		}
	}
	
}