(()=>{"use strict";const e=config.API_KEY,t={units:"us",address:"",days:[]};async function n(e){console.log(e);let t=[];for(let n=0;n<5;n++){let o={location:e.address,date:e.days[n].datetime,low:e.days[n].tempmin,high:e.days[n].tempmax,hourly:e.days[n].hours,condition:e.days[n].conditions,icon:e.days[n].icon};t.push(o)}return t}async function o(){let o=document.getElementById("weather"),s="",a="";for(o.hasChildNodes()?(s=document.getElementById("locationInput").value,a=t.units):(s="dallas",a="us"),t.days.length>0&&(t.days=[]),t.days=await async function(o,s){console.log(o),console.log(s);try{const a=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${o}/next7days?unitGroup=${s}&include=days,hours&key=${e}&contentType=json`,{mode:"cors"}),i=await a.json();let d=await n(i);return t.address=i.resolvedAddress,document.getElementById("locationInput").value="",d}catch{alert("No Location Found, Try Again"),document.getElementById("locationInput").value=""}}(s,a);o.firstChild;)o.removeChild(o.firstChild);let i=document.getElementById("location");i.textContent="Showing Weather for: "+t.address;let d=document.getElementById("switch-units");"us"==t.units?(i.innerText+="(°F)",d.innerText="Switch to °C"):(i.innerText+="(°C)",d.innerText="Switch to °F"),t.days.forEach((e=>{let t=document.createElement("div");t.className="card";let n=function(e){let t=e.split("-");return["January","February","March","April","May","June","July","August","September","October","November","December"][t[1]-1]+" "+parseInt(t[2],10)}(e.date),s=document.createElement("div");s.className="date",s.innerText=n,t.appendChild(s);let a=document.createElement("div");a.className="icon";let i=document.createElement("img");t.appendChild(a),a.appendChild(i),i.src="../icons/"+e.icon+".svg";let d=document.createElement("div");d.className="temp",d.textContent="High: "+Math.round(e.high)+"° Low: "+Math.round(e.low)+"°",t.appendChild(d);let c=document.createElement("div");c.innerText=e.condition,c.className="condition",t.appendChild(c),o.appendChild(t)})),document.getElementById("container").classList.add(t.days[0].icon);let c=document.getElementsByClassName("card");console.log(c);let l=c[0].getElementsByClassName("temp");console.log(l[0].innerText)}async function s(){"us"==t.units?t.units="metric":t.units="us",console.log(document.getElementById("switch-units").innerText),t.days=await async function(){let o=t.address;console.log(o);let s=t.units;try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${o}/next7days?unitGroup=${s}&include=days,hours&key=${e}&contentType=json`,{mode:"cors"}),a=await t.json();let i=await n(a);return document.getElementById("locationInput").value="",i}catch{alert("No Location Found, Try Again"),console.log(o),document.getElementById("locationInput").value=""}}();let o=document.getElementById("location");o.textContent="Showing Weather for: "+t.address;let s=document.getElementById("switch-units");"us"==t.units?(o.innerText+="(°F)",s.innerText="Switch to °C"):(o.innerText+="(°C)",s.innerText="Switch to °F");let a=document.getElementsByClassName("card");for(let e=0;e<t.days.length;e++)a[e].getElementsByClassName("temp")[0].innerText="High: "+Math.round(t.days[e].high)+"° Low: "+Math.round(t.days[e].low)+"°"}window.onload=function(){document.getElementById("search-for-weather").addEventListener("click",o),document.getElementById("switch-units").addEventListener("click",s),o()}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBU0MsT0FBT0MsUUFFaEJDLEVBSUcsQ0FDTEMsTUFKVSxLQUtWQyxRQUpZLEdBS1pDLEtBSlMsSUErQ2JDLGVBQWVDLEVBQVVDLEdBQ3ZCQyxRQUFRQyxJQUFJRixHQUNaLElBQUlHLEVBQWlCLEdBQ3JCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJLEVBQUdBLElBQUssQ0FDMUIsSUFBSUMsRUFBTSxDQUNSQyxTQUFVTixFQUFRSixRQUNsQlcsS0FBTVAsRUFBUUgsS0FBS08sR0FBR0ksU0FDdEJDLElBQUtULEVBQVFILEtBQUtPLEdBQUdNLFFBQ3JCQyxLQUFNWCxFQUFRSCxLQUFLTyxHQUFHUSxRQUN0QkMsT0FBUWIsRUFBUUgsS0FBS08sR0FBR1UsTUFDeEJDLFVBQVdmLEVBQVFILEtBQUtPLEdBQUdZLFdBQzNCQyxLQUFNakIsRUFBUUgsS0FBS08sR0FBR2EsTUFFeEJkLEVBQWVlLEtBQUtiLEdBRXRCLE9BQU9GLEVDM0RUTCxlQUFlcUIsSUFDYixJQUFJQyxFQUFNQyxTQUFTQyxlQUFlLFdBQzlCQyxFQUFTLEdBQ1Q1QixFQUFRLEdBY1osSUFiSXlCLEVBQUlJLGlCQUNORCxFRDBEV0YsU0FBU0MsZUFBZSxpQkFBaUJHLE1DekRwRDlCLEVBQVFELEVBQWNDLFFBRXRCNEIsRUFBUyxTQUNUNUIsRUFBUSxNQUVORCxFQUFjRyxLQUFLNkIsT0FBUyxJQUM5QmhDLEVBQWNHLEtBQU8sSUFHdkJILEVBQWNHLFdEVmhCQyxlQUEwQnlCLEVBQVE1QixHQUNoQ00sUUFBUUMsSUFBSXFCLEdBQ1p0QixRQUFRQyxJQUFJUCxHQUNaLElBQ0UsTUFBTWdDLFFBQWlCQyxNQUNyQix1RkFBdUZMLHlCQUE4QjVCLDRCQUFnQ0oscUJBQ3JKLENBQUVzQyxLQUFNLFNBRUo3QixRQUFnQjJCLEVBQVNHLE9BQy9CLElBQUlqQyxRQUFhRSxFQUFVQyxHQUczQixPQUZBTixFQUFjRSxRQUFVSSxFQUFRK0IsZ0JBQ2hDVixTQUFTQyxlQUFlLGlCQUFpQkcsTUFBUSxHQUMxQzVCLEVBQ1AsTUFDQW1DLE1BQU0sZ0NBQ05YLFNBQVNDLGVBQWUsaUJBQWlCRyxNQUFRLElDTHhCUSxDQUFXVixFQUFRNUIsR0FFdkN5QixFQUFJYyxZQUNUZCxFQUFJZSxZQUFZZixFQUFJYyxZQUV0QixJQUFJRSxFQUFjZixTQUFTQyxlQUFlLFlBQzFDYyxFQUFZQyxZQUFjLHdCQUEwQjNDLEVBQWNFLFFBQ2xFLElBQUkwQyxFQUFVakIsU0FBU0MsZUFBZSxnQkFDWCxNQUF2QjVCLEVBQWNDLE9BQ2hCeUMsRUFBWUcsV0FBYSxPQUN6QkQsRUFBUUMsVUFBWSxpQkFFcEJILEVBQVlHLFdBQWEsT0FDekJELEVBQVFDLFVBQVksZ0JBRXRCN0MsRUFBY0csS0FBSzJDLFNBQVNuQyxJQUMxQixJQUFJb0MsRUFBV3BCLFNBQVNxQixjQUFjLE9BQ3RDRCxFQUFTRSxVQUFZLE9BRXJCLElBQUlwQyxFQThFUixTQUFtQkEsR0FDakIsSUFjSXFDLEVBQVlyQyxFQUFLc0MsTUFBTSxLQUczQixNQWpCYSxDQUNYLFVBQ0EsV0FDQSxRQUNBLFFBQ0EsTUFDQSxPQUNBLE9BQ0EsU0FDQSxZQUNBLFVBQ0EsV0FDQSxZQUdpQkQsRUFBVSxHQUFLLEdBRW5CLElBQU1FLFNBQVNGLEVBQVUsR0FBSSxJQWhHL0JHLENBQVUxQyxFQUFJRSxNQUNyQnlDLEVBQVUzQixTQUFTcUIsY0FBYyxPQUNyQ00sRUFBUUwsVUFBWSxPQUNwQkssRUFBUVQsVUFBWWhDLEVBQ3BCa0MsRUFBU1EsWUFBWUQsR0FFckIsSUFBSUUsRUFBYTdCLFNBQVNxQixjQUFjLE9BQ3hDUSxFQUFXUCxVQUFZLE9BQ3ZCLElBQUlRLEVBQVU5QixTQUFTcUIsY0FBYyxPQUNyQ0QsRUFBU1EsWUFBWUMsR0FDckJBLEVBQVdELFlBQVlFLEdBQ3ZCQSxFQUFRQyxJQUFNLFlBQWMvQyxFQUFJWSxLQUFPLE9BRXZDLElBQUlvQyxFQUFVaEMsU0FBU3FCLGNBQWMsT0FDckNXLEVBQVFWLFVBQVksT0FDcEJVLEVBQVFoQixZQUNOLFNBQ0FpQixLQUFLQyxNQUFNbEQsRUFBSU0sTUFEZixVQUlBMkMsS0FBS0MsTUFBTWxELEVBQUlJLEtBQ2YsSUFDRmdDLEVBQVNRLFlBQVlJLEdBRXJCLElBQUlHLEVBQVVuQyxTQUFTcUIsY0FBYyxPQUNyQ2MsRUFBUWpCLFVBQVlsQyxFQUFJVSxVQUN4QnlDLEVBQVFiLFVBQVksWUFDcEJGLEVBQVNRLFlBQVlPLEdBQ3JCcEMsRUFBSTZCLFlBQVlSLE1BR2xCcEIsU0FDR0MsZUFBZSxhQUNmbUMsVUFBVUMsSUFBSWhFLEVBQWNHLEtBQUssR0FBR29CLE1BQ3ZDLElBQUkwQyxFQUFRdEMsU0FBU3VDLHVCQUF1QixRQUM1QzNELFFBQVFDLElBQUl5RCxHQUNaLElBQUlFLEVBQUtGLEVBQU0sR0FBR0MsdUJBQXVCLFFBQ3pDM0QsUUFBUUMsSUFBSTJELEVBQUcsR0FBR3RCLFdBR3BCekMsZUFBZWdFLElETmMsTUFBdkJwRSxFQUFjQyxNQUNoQkQsRUFBY0MsTUFBUSxTQUV0QkQsRUFBY0MsTUFBUSxLQ0t4Qk0sUUFBUUMsSUFBSW1CLFNBQVNDLGVBQWUsZ0JBQWdCaUIsV0FDcEQ3QyxFQUFjRyxXRHJEaEJDLGlCQUNFLElBQUlRLEVBQVdaLEVBQWNFLFFBQzdCSyxRQUFRQyxJQUFJSSxHQUNaLElBQUlYLEVBQVFELEVBQWNDLE1BQzFCLElBQ0UsTUFBTWdDLFFBQWlCQyxNQUNyQix1RkFBdUZ0Qix5QkFBZ0NYLDRCQUFnQ0oscUJBQ3ZKLENBQUVzQyxLQUFNLFNBRUo3QixRQUFnQjJCLEVBQVNHLE9BQy9CLElBQUlqQyxRQUFhRSxFQUFVQyxHQUUzQixPQURBcUIsU0FBU0MsZUFBZSxpQkFBaUJHLE1BQVEsR0FDMUM1QixFQUNQLE1BQ0FtQyxNQUFNLGdDQUNOL0IsUUFBUUMsSUFBSUksR0FDWmUsU0FBU0MsZUFBZSxpQkFBaUJHLE1BQVEsSUNxQ3hCc0MsR0FFM0IsSUFBSTNCLEVBQWNmLFNBQVNDLGVBQWUsWUFDMUNjLEVBQVlDLFlBQWMsd0JBQTBCM0MsRUFBY0UsUUFFbEUsSUFBSTBDLEVBQVVqQixTQUFTQyxlQUFlLGdCQUNYLE1BQXZCNUIsRUFBY0MsT0FDaEJ5QyxFQUFZRyxXQUFhLE9BQ3pCRCxFQUFRQyxVQUFZLGlCQUVwQkgsRUFBWUcsV0FBYSxPQUN6QkQsRUFBUUMsVUFBWSxnQkFHdEIsSUFBSXlCLEVBQVEzQyxTQUFTdUMsdUJBQXVCLFFBQzVDLElBQUssSUFBSXhELEVBQUksRUFBR0EsRUFBSVYsRUFBY0csS0FBSzZCLE9BQVF0QixJQUM5QjRELEVBQU01RCxHQUFHd0QsdUJBQXVCLFFBQ3RDLEdBQUdyQixVQUNWLFNBQ0FlLEtBQUtDLE1BQU03RCxFQUFjRyxLQUFLTyxHQUFHTyxNQURqQyxVQUlBMkMsS0FBS0MsTUFBTTdELEVBQWNHLEtBQUtPLEdBQUdLLEtBQ2pDLElBZ0NOd0QsT0FBT0MsT0FBUyxXQTNCZDdDLFNBQ0dDLGVBQWUsc0JBQ2Y2QyxpQkFBaUIsUUFBU2hELEdBRTdCRSxTQUFTQyxlQUFlLGdCQUFnQjZDLGlCQUFpQixRQUFTTCxHQXlCbEUzQyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJS2V5ID0gY29uZmlnLkFQSV9LRVk7XHJcblxyXG5jb25zdCB3ZWF0aGVyT2JqZWN0ID0gKCgpID0+IHtcclxuICBsZXQgdW5pdHMgPSBcInVzXCI7XHJcbiAgbGV0IGFkZHJlc3MgPSBcIlwiO1xyXG4gIGxldCBkYXlzID0gW107XHJcbiAgcmV0dXJuIHtcclxuICAgIHVuaXRzLFxyXG4gICAgYWRkcmVzcyxcclxuICAgIGRheXMsXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoc2VhcmNoLCB1bml0cykge1xyXG4gIGNvbnNvbGUubG9nKHNlYXJjaCk7XHJcbiAgY29uc29sZS5sb2codW5pdHMpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtzZWFyY2h9L25leHQ3ZGF5cz91bml0R3JvdXA9JHt1bml0c30maW5jbHVkZT1kYXlzLGhvdXJzJmtleT0ke0FQSUtleX0mY29udGVudFR5cGU9anNvbmAsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgZGF5cyA9IGF3YWl0IHF1ZXJ5SlNPTih3ZWF0aGVyKTtcclxuICAgIHdlYXRoZXJPYmplY3QuYWRkcmVzcyA9IHdlYXRoZXIucmVzb2x2ZWRBZGRyZXNzO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbklucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgIHJldHVybiBkYXlzO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgYWxlcnQoXCJObyBMb2NhdGlvbiBGb3VuZCwgVHJ5IEFnYWluXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbklucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVuaXRTd2l0Y2hXZWF0aGVyKCkge1xyXG4gIGxldCBsb2NhdGlvbiA9IHdlYXRoZXJPYmplY3QuYWRkcmVzcztcclxuICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XHJcbiAgbGV0IHVuaXRzID0gd2VhdGhlck9iamVjdC51bml0cztcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7bG9jYXRpb259L25leHQ3ZGF5cz91bml0R3JvdXA9JHt1bml0c30maW5jbHVkZT1kYXlzLGhvdXJzJmtleT0ke0FQSUtleX0mY29udGVudFR5cGU9anNvbmAsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBsZXQgZGF5cyA9IGF3YWl0IHF1ZXJ5SlNPTih3ZWF0aGVyKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25JbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICByZXR1cm4gZGF5cztcclxuICB9IGNhdGNoIHtcclxuICAgIGFsZXJ0KFwiTm8gTG9jYXRpb24gRm91bmQsIFRyeSBBZ2FpblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25JbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBxdWVyeUpTT04od2VhdGhlcikge1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xyXG4gIGxldCBkYXlzT2ZJbnRlcmVzdCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBsZXQgZGF5ID0ge1xyXG4gICAgICBsb2NhdGlvbjogd2VhdGhlci5hZGRyZXNzLFxyXG4gICAgICBkYXRlOiB3ZWF0aGVyLmRheXNbaV0uZGF0ZXRpbWUsXHJcbiAgICAgIGxvdzogd2VhdGhlci5kYXlzW2ldLnRlbXBtaW4sXHJcbiAgICAgIGhpZ2g6IHdlYXRoZXIuZGF5c1tpXS50ZW1wbWF4LFxyXG4gICAgICBob3VybHk6IHdlYXRoZXIuZGF5c1tpXS5ob3VycyxcclxuICAgICAgY29uZGl0aW9uOiB3ZWF0aGVyLmRheXNbaV0uY29uZGl0aW9ucyxcclxuICAgICAgaWNvbjogd2VhdGhlci5kYXlzW2ldLmljb24sXHJcbiAgICB9O1xyXG4gICAgZGF5c09mSW50ZXJlc3QucHVzaChkYXkpO1xyXG4gIH1cclxuICByZXR1cm4gZGF5c09mSW50ZXJlc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlYXJjaCgpIHtcclxuICBsZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbklucHV0XCIpLnZhbHVlO1xyXG4gIHJldHVybiBzZWFyY2g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFVuaXRzKCkge1xyXG4gIGlmICh3ZWF0aGVyT2JqZWN0LnVuaXRzID09IFwidXNcIikge1xyXG4gICAgd2VhdGhlck9iamVjdC51bml0cyA9IFwibWV0cmljXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdlYXRoZXJPYmplY3QudW5pdHMgPSBcInVzXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHdlYXRoZXJPYmplY3QsXHJcbiAgZ2V0V2VhdGhlcixcclxuICBnZXRVbml0U3dpdGNoV2VhdGhlcixcclxuICBzd2l0Y2hVbml0cyxcclxuICBnZXRTZWFyY2gsXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgd2VhdGhlck9iamVjdCxcclxuICBnZXRXZWF0aGVyLFxyXG4gIGdldFVuaXRTd2l0Y2hXZWF0aGVyLFxyXG4gIHN3aXRjaFVuaXRzLFxyXG4gIGdldFNlYXJjaCxcclxufSBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXIuanNcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckRheXMoKSB7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlclwiKTtcclxuICBsZXQgc2VhcmNoID0gXCJcIjtcclxuICBsZXQgdW5pdHMgPSBcIlwiO1xyXG4gIGlmIChkaXYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBzZWFyY2ggPSBnZXRTZWFyY2goKTtcclxuICAgIHVuaXRzID0gd2VhdGhlck9iamVjdC51bml0cztcclxuICB9IGVsc2Uge1xyXG4gICAgc2VhcmNoID0gXCJkYWxsYXNcIjtcclxuICAgIHVuaXRzID0gXCJ1c1wiO1xyXG4gIH1cclxuICBpZiAod2VhdGhlck9iamVjdC5kYXlzLmxlbmd0aCA+IDApIHtcclxuICAgIHdlYXRoZXJPYmplY3QuZGF5cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgd2VhdGhlck9iamVjdC5kYXlzID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2gsIHVuaXRzKTtcclxuXHJcbiAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XHJcbiAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuICBsZXQgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xyXG4gIGxvY2F0aW9uRGl2LnRleHRDb250ZW50ID0gXCJTaG93aW5nIFdlYXRoZXIgZm9yOiBcIiArIHdlYXRoZXJPYmplY3QuYWRkcmVzcztcclxuICBsZXQgdW5pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoLXVuaXRzXCIpO1xyXG4gIGlmICh3ZWF0aGVyT2JqZWN0LnVuaXRzID09IFwidXNcIikge1xyXG4gICAgbG9jYXRpb25EaXYuaW5uZXJUZXh0ICs9IFwiKFxcdTAwQjBGKVwiO1xyXG4gICAgdW5pdEJ0bi5pbm5lclRleHQgPSBgU3dpdGNoIHRvIFxcdTAwQjBDYDtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYXRpb25EaXYuaW5uZXJUZXh0ICs9IFwiKFxcdTAwQjBDKVwiO1xyXG4gICAgdW5pdEJ0bi5pbm5lclRleHQgPSBgU3dpdGNoIHRvIFxcdTAwQjBGYDtcclxuICB9XHJcbiAgd2VhdGhlck9iamVjdC5kYXlzLmZvckVhY2goKGRheSkgPT4ge1xyXG4gICAgbGV0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlubmVyRGl2LmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG5cclxuICAgIGxldCBkYXRlID0gcGFyc2VEYXRlKGRheS5kYXRlKTtcclxuICAgIGxldCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRhdGVEaXYuY2xhc3NOYW1lID0gXCJkYXRlXCI7XHJcbiAgICBkYXRlRGl2LmlubmVyVGV4dCA9IGRhdGU7XHJcbiAgICBpbm5lckRpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuXHJcbiAgICBsZXQgaWNvbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpY29uSG9sZGVyLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xyXG4gICAgbGV0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQoaWNvbkhvbGRlcik7XHJcbiAgICBpY29uSG9sZGVyLmFwcGVuZENoaWxkKGljb25EaXYpO1xyXG4gICAgaWNvbkRpdi5zcmMgPSBcIi4uL2ljb25zL1wiICsgZGF5Lmljb24gKyBcIi5zdmdcIjtcclxuXHJcbiAgICBsZXQgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZW1wRGl2LmNsYXNzTmFtZSA9IFwidGVtcFwiO1xyXG4gICAgdGVtcERpdi50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiSGlnaDogXCIgK1xyXG4gICAgICBNYXRoLnJvdW5kKGRheS5oaWdoKSArXHJcbiAgICAgIGBcXHUwMEIwYCArXHJcbiAgICAgIFwiIExvdzogXCIgK1xyXG4gICAgICBNYXRoLnJvdW5kKGRheS5sb3cpICtcclxuICAgICAgYFxcdTAwQjBgO1xyXG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XHJcblxyXG4gICAgbGV0IGNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uZERpdi5pbm5lclRleHQgPSBkYXkuY29uZGl0aW9uO1xyXG4gICAgY29uZERpdi5jbGFzc05hbWUgPSBcImNvbmRpdGlvblwiO1xyXG4gICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQoY29uZERpdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpXHJcbiAgICAuY2xhc3NMaXN0LmFkZCh3ZWF0aGVyT2JqZWN0LmRheXNbMF0uaWNvbik7XHJcbiAgbGV0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRcIik7XHJcbiAgY29uc29sZS5sb2cobm9kZXMpO1xyXG4gIGxldCB0ZCA9IG5vZGVzWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZW1wXCIpO1xyXG4gIGNvbnNvbGUubG9nKHRkWzBdLmlubmVyVGV4dCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZURheXMoKSB7XHJcbiAgc3dpdGNoVW5pdHMoKTtcclxuICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaC11bml0c1wiKS5pbm5lclRleHQpO1xyXG4gIHdlYXRoZXJPYmplY3QuZGF5cyA9IGF3YWl0IGdldFVuaXRTd2l0Y2hXZWF0aGVyKCk7XHJcblxyXG4gIGxldCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBcIlNob3dpbmcgV2VhdGhlciBmb3I6IFwiICsgd2VhdGhlck9iamVjdC5hZGRyZXNzO1xyXG5cclxuICBsZXQgdW5pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoLXVuaXRzXCIpO1xyXG4gIGlmICh3ZWF0aGVyT2JqZWN0LnVuaXRzID09IFwidXNcIikge1xyXG4gICAgbG9jYXRpb25EaXYuaW5uZXJUZXh0ICs9IFwiKFxcdTAwQjBGKVwiO1xyXG4gICAgdW5pdEJ0bi5pbm5lclRleHQgPSBgU3dpdGNoIHRvIFxcdTAwQjBDYDtcclxuICB9IGVsc2Uge1xyXG4gICAgbG9jYXRpb25EaXYuaW5uZXJUZXh0ICs9IFwiKFxcdTAwQjBDKVwiO1xyXG4gICAgdW5pdEJ0bi5pbm5lclRleHQgPSBgU3dpdGNoIHRvIFxcdTAwQjBGYDtcclxuICB9XHJcblxyXG4gIGxldCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlck9iamVjdC5kYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgdGVtcERpdnMgPSBjYXJkc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGVtcFwiKTtcclxuICAgIHRlbXBEaXZzWzBdLmlubmVyVGV4dCA9XHJcbiAgICAgIFwiSGlnaDogXCIgK1xyXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3QuZGF5c1tpXS5oaWdoKSArXHJcbiAgICAgIGBcXHUwMEIwYCArXHJcbiAgICAgIFwiIExvdzogXCIgK1xyXG4gICAgICBNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3QuZGF5c1tpXS5sb3cpICtcclxuICAgICAgYFxcdTAwQjBgO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpIHtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvci13ZWF0aGVyXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckRheXMpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaC11bml0c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlRGF5cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlKSB7XHJcbiAgbGV0IG1vbnRocyA9IFtcclxuICAgIFwiSmFudWFyeVwiLFxyXG4gICAgXCJGZWJydWFyeVwiLFxyXG4gICAgXCJNYXJjaFwiLFxyXG4gICAgXCJBcHJpbFwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuZVwiLFxyXG4gICAgXCJKdWx5XCIsXHJcbiAgICBcIkF1Z3VzdFwiLFxyXG4gICAgXCJTZXB0ZW1iZXJcIixcclxuICAgIFwiT2N0b2JlclwiLFxyXG4gICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJEZWNlbWJlclwiLFxyXG4gIF07XHJcbiAgbGV0IHNwbGl0RGF0ZSA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gIGxldCBtb250aCA9IG1vbnRoc1tzcGxpdERhdGVbMV0gLSAxXTtcclxuXHJcbiAgcmV0dXJuIG1vbnRoICsgXCIgXCIgKyBwYXJzZUludChzcGxpdERhdGVbMl0sIDEwKTtcclxufVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIoKTtcclxuICByZW5kZXJEYXlzKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJBUElLZXkiLCJjb25maWciLCJBUElfS0VZIiwid2VhdGhlck9iamVjdCIsInVuaXRzIiwiYWRkcmVzcyIsImRheXMiLCJhc3luYyIsInF1ZXJ5SlNPTiIsIndlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwiZGF5c09mSW50ZXJlc3QiLCJpIiwiZGF5IiwibG9jYXRpb24iLCJkYXRlIiwiZGF0ZXRpbWUiLCJsb3ciLCJ0ZW1wbWluIiwiaGlnaCIsInRlbXBtYXgiLCJob3VybHkiLCJob3VycyIsImNvbmRpdGlvbiIsImNvbmRpdGlvbnMiLCJpY29uIiwicHVzaCIsInJlbmRlckRheXMiLCJkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoIiwiaGFzQ2hpbGROb2RlcyIsInZhbHVlIiwibGVuZ3RoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwicmVzb2x2ZWRBZGRyZXNzIiwiYWxlcnQiLCJnZXRXZWF0aGVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwibG9jYXRpb25EaXYiLCJ0ZXh0Q29udGVudCIsInVuaXRCdG4iLCJpbm5lclRleHQiLCJmb3JFYWNoIiwiaW5uZXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3BsaXREYXRlIiwic3BsaXQiLCJwYXJzZUludCIsInBhcnNlRGF0ZSIsImRhdGVEaXYiLCJhcHBlbmRDaGlsZCIsImljb25Ib2xkZXIiLCJpY29uRGl2Iiwic3JjIiwidGVtcERpdiIsIk1hdGgiLCJyb3VuZCIsImNvbmREaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJub2RlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZCIsInVwZGF0ZURheXMiLCJnZXRVbml0U3dpdGNoV2VhdGhlciIsImNhcmRzIiwid2luZG93Iiwib25sb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=