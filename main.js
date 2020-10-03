'use strict'
{
    document.querySelector('button').addEventListener('click',()=>{
        const ul =document.querySelector('ul');
        const input =document.querySelector('input');
        const li =document.querySelector('li');
        let nowtime =new  Date();
        const d = nowtime.getDate();
        const m = nowtime.getMonth()+1;
        const h = nowtime.getHours();

        
         
        
        const newli = document.createElement('li');
               
        const result=window.confirm('期限を設定しますか？');

        if(result){         
            newli.textContent = input.value  + '\t\t期限:'+ window.prompt('tex',`${m}月${d}日${h}時`);
            ul.appendChild(newli);
        }
        else{        
            newli.textContent = input.value 
            ul.appendChild(newli);
        }
        
        newli.addEventListener('click', () => {
            if(confirm('リストから削除しますか？')) {
                newli.textContent= '完了したtask:'+ newli.textContent + '完了時刻:'+`${m}月${d}日${h}時`;
                newli.classList.add("fi");
            }

        })

        input.value='';
        input.focus();
                
    })
