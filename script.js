//your code here!
let list = document.getElementById('infi-list');
let listNum = 0;
let loading = false;

const addList=()=>{
	listNum++;
	let item = document.createElement('li');
	item.innerText = `Item ${listNum}`;
	list.appendChild(item);
}

for(let i=0;i<10;i++){
	addList();
}

list.addEventListener('scroll', ()=>{
	if(!loading && list.scrollTop + list.clientHeight >= list.scrollHeight-2){
		addList();
		addList();
		setTimeout(() => loading = false, 100); 
	}
})



