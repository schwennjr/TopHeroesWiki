import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const setImagePopup = () => {
    document.querySelectorAll('.th_container .th_image img').forEach((img) => {
        img.onclick = function() {            
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = img.getAttribute('src');
        }
    });

    document.querySelectorAll('body').onclick = () => {
        document.querySelectorAll('.popup-image').forEach((div) => {
            if (div.style.display === 'block') {
                div.style.display = 'none';
            }
        });
    };
}

export function onRouteDidUpdate({location, previousLocation}) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    //if (location.pathname === previousLocation?.pathname) return;
    setImagePopup();
}
  
if (ExecutionEnvironment.canUseDOM) {
    window.addEventListener('load', () => {
        setTimeout(setImagePopup, 1000);
    });
}