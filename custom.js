 $loadingText = $('.loading-message');
 $counterText = $('.counter');
 $spin = $('.spin');
 $loader = $('.loader');
 $content = $('.content');

let degrees = 0;
let counter = 8;


//у этой функции нет своего this, она берет родительский
const init = async () => {
    let id1 = setInterval(() => {
        $spin.css({
            transform: `rotate(${degrees}deg)`
        })
        degrees+=4;
    }, 5);
    
    
    $counterText.text(`Осталось ${counter}`);
    counter--;
    
    let id2 = setInterval(() => {
        $counterText.text(`Осталось ${counter}`);
        counter--;
    }, 1000);
    
    
    $loadingText.text('Кормим попугаев....');
    
    await getPromise('Мотаем киноленты....', 2000).then((text) => {
        $loadingText.text(text);
    });
    
    await getPromise('Варим гречку....', 2000).then((text) => {
        $loadingText.text(text);
    });
    
    await getPromise('Обнимаем русскую березку....', 2000).then((text) => {
        $loadingText.text(text);
    });
    
    setTimeout(() => {
        $loader.hide();
        $content.show();   
        clearInterval(id1);
        clearInterval(id2);
    }, 2000)

    
//    await setTimeout(() => {
//        $loadingText.text('Варим гречку....');
//    }, 2000);
}


const getPromise = (text, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    })
};

init();


//Promise
//
//pending - функция выполняется
//resolved - функция успешно завершила работу
//rejected - функция завершилась с ошибкой

//new Promise((resolve, reject) => {
//    
//});

//callback - функция вызывается из другой функции