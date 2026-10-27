import { useEffect } from "react";

// Надёжная блокировка прокрутки страницы (в т.ч. на iOS Safari), пока открыто
// меню или модальное окно. Счётчик нужен, чтобы несколько окон подряд
// не конфликтовали друг с другом.
let lockCount = 0;
let savedScrollY = 0;

function lock() {
  if (lockCount === 0) {
    savedScrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
  }
  lockCount += 1;
}

function unlock() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    const body = document.body;
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    // behavior: "instant" — чтобы html { scroll-behavior: smooth } не анимировал возврат
    window.scrollTo({ top: savedScrollY, left: 0, behavior: "instant" });
  }
}

export default function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    lock();
    return unlock;
  }, [active]);
}
