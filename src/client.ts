import "htmx.org";

const PENDING_SKELETON_CLASS = "todo-item-pending-skeleton";

const buildPendingTodoSkeleton = () => {
  const wrapper = document.createElement("div");
  wrapper.className = `${PENDING_SKELETON_CLASS} card bg-base-100 border border-base-300 shadow-md rounded-xl`;
  wrapper.innerHTML = `
    <div class="card-body p-4 flex-row items-center gap-4">
      <div class="skeleton h-5 w-2/3"></div>
      <div class="ml-auto flex gap-3">
        <div class="skeleton h-10 w-20 rounded-btn"></div>
        <div class="skeleton h-10 w-24 rounded-btn"></div>
      </div>
    </div>
  `;
  return wrapper;
};

const appendTodoSkeleton = (event: Event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return;
  }
  const list = document.querySelector("#todo-list .todo-list-items");
  if (!list) {
    return;
  }
  list.appendChild(buildPendingTodoSkeleton());
};

const removePendingTodoSkeleton = () => {
  const pendingSkeleton = document.querySelector(`.${PENDING_SKELETON_CLASS}`);
  pendingSkeleton?.remove();
};

declare global {
  interface Window {
    appendTodoSkeleton: (event: Event) => void;
    removePendingTodoSkeleton: () => void;
  }
}

window.appendTodoSkeleton = appendTodoSkeleton;
window.removePendingTodoSkeleton = removePendingTodoSkeleton;
