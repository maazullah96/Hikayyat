import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import style from "./SideNav.module.css";
import axios from "axios";

const SideNavItems = () => {
  const [categories, setCategories] = useState([]);
  const [fncall, setFncall] = useState(false);
  const [list, setList] = useState([]);

  // const items = [];
  const items = [
    { type: style.option, icon: "home", text: "Home", link: "/" },
    { type: style.option, icon: "file-text-o", text: "News", link: "/news" }
  ];

  useEffect(() => {
    axios
      .get("/categories")
      .then(response => {
        setCategories(response.data.category);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  const showItems = () => {
    // console.log(categories);
    if (!fncall && categories.length > 0) {
      for (var i = 0; i < categories.length; i++) {
        items.push({
          type: style.option,
          icon: "file-text-o",
          text: categories[i].title,
          link: `/category/${categories[i].title}/`
        });
      }
      setList(items);
      setFncall(true);
    }

    return list.map((item, i) => {
      return (
        <div className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <>{showItems()}</>;
};

export default SideNavItems;
