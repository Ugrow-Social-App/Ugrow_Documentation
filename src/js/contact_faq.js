// Behavior for the FAQ section on the contact page.
// Only one question stays open at a time

document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq_question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq_item');
            const answer = item.querySelector('.faq_answer');
            const isOpen = item.classList.contains('open');

            closeAllFaqItems();

            if (!isOpen) {
                openFaqItem(item, question, answer);
            }
        });
    });
});

function openFaqItem(item, question, answer) {
    item.classList.add('open');
    question.setAttribute('aria-expanded', 'true');
    answer.style.minHeight = `${answer.scrollHeight + 25}px`;
}

function closeFaqItem(item, question, answer) {
    item.classList.remove('open');
    question.setAttribute('aria-expanded', 'false');
    answer.style.maxHeight = null;
}

function closeAllFaqItems() {
    document.querySelectorAll('.faq_item.open').forEach((item) => {
        const question = item.querySelector('.faq_question');
        const answer = item.querySelector('.faq_answer');
        closeFaqItem(item, question, answer);
    });
}