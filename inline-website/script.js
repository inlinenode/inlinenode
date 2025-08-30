document.addEventListener("DOMContentLoaded", () => {
  const topicSelect = document.getElementById("topicSelect");
  if (topicSelect) {
    topicSelect.addEventListener("change", () => {
      const value = topicSelect.value;
      if (value) {
        window.location.href = value;
      }
    });
  }
});
