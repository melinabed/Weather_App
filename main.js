(()=>{"use strict";document.getElementById("search-btn").addEventListener("click",(function(){const e=document.getElementById("search").value;fetch(`https://api.weatherapi.com/v1/current.json?key=273b38d4a7de4dbbbbb10356231711&q=${e}`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e.current.temp_f)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR2lCQSxTQUFTQyxlQUFlLGNBQ2hDQyxpQkFBaUIsU0NKbkIsV0FFTCxNQUFNQyxFQUFZSCxTQUFTQyxlQUFlLFVBQVVHLE1BRXBEQyxNQUNFLG1GQUFtRkYsSUFDbkYsQ0FBRUcsS0FBTSxTQUVQQyxNQUFLLFNBQVVDLEdBQ2QsT0FBT0EsRUFBU0MsTUFDbEIsSUFDQ0YsTUFBSyxTQUFVQyxHQUNkRSxRQUFRQyxJQUFJSCxFQUFTSSxRQUFRQyxPQUUvQixHQUNKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9jaXR5LXNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaXR5U2VhcmNoIH0gZnJvbSBcIi4vY2l0eS1zZWFyY2hcIjtcblxubGV0IGNsaWNrRXZlbnRNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idG5cIik7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2l0eVNlYXJjaCk7XG59KSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpdHlTZWFyY2goKSB7XG4gIC8vZ2V0cyB1c2VyIGlucHV0IGFuZCBkaXNwbGF5cyBkYXRhXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpLnZhbHVlO1xuICAvL2NvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MjczYjM4ZDRhN2RlNGRiYmJiYjEwMzU2MjMxNzExJnE9JHt1c2VySW5wdXR9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mKTtcbiAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGVtcF9mKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZXJJbnB1dCIsInZhbHVlIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidGVtcF9mIl0sInNvdXJjZVJvb3QiOiIifQ==