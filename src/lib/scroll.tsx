export function ScrollIntoView(options: {
  id: string;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}): void {
  if (!options.id) return;

  const element = document.getElementById(options.id);
  if (element) {
    element.scrollIntoView({
      behavior: options.behavior ?? "smooth", 
      block: options.block ?? "start", 
      inline: "nearest",
    });
  }
}
