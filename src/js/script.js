const aboutus = document.querySelector('.aboutus');
const cards = document.querySelectorAll('.card');
const footerYear = document.querySelector('.footer__year');
const faq = document.querySelector('.faq__boxes');
const faqBtns = document.querySelectorAll('.faq__btn');

function showCard() {
	cards.forEach((card) => {
		card.classList.remove('active');
		this.classList.add('active');
	});

	handleBgColor(this);
}

const handleBgColor = (card) => {
	const aboutCards = card.getAttribute('data-card');
	body.setAttribute('data-bg', aboutCards);
};
function openFaqItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
	} else {
		closeFaqItems();
		this.nextElementSibling.classList.toggle('active');
	}
}
const closeFaqItems = () => {
	const allActiveItems = document.querySelectorAll('.faq__info');
	allActiveItems.forEach((item) => item.classList.remove('active'));
};
const clickOutsideFaq = (e) => {
	if (
		e.target.classList.contains('faq__btn') ||
		e.target.classList.contains('faq__info') ||
		e.target.classList.contains('faq__info-text')
	)
		return;

	closeFaqItems();
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
window.addEventListener('click', clickOutsideFaq);
faqBtns.forEach((btn) => btn.addEventListener('click', openFaqItems));
cards.forEach((card) => card.addEventListener('click', showCard));
