import { ref, computed } from "vue";

export function useHover(normalIcon, hoverIcon) {
  const isHover = ref(false);

  const isDefault = computed(() => (isHover.value ? hoverIcon : normalIcon));

  return { isHover, isDefault };
}
