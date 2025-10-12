import React, { useState } from "react";
export default function CategoryTabs({ tabs = [], onTab }){
  const [active, setActive] = useState(0);
  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        {tabs.map((t, i) => (
          <button
            key={t.value}
            className={"btn " + (i===active ? "" : "outline")}
            onClick={() => { setActive(i); onTab && onTab(t.value);}}
          >{t.label}</button>
        ))}
      </div>
    </div>
  );
}