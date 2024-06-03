import React from "react";
import { Meteor } from "meteor/meteor";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const Info = () => {
  const isLoading = useSubscribe("links");
  const links = useFind(() => LinksCollection.find());

  if (isLoading()) {
    return <div>Loading...</div>;
  }

  console.log(
    Meteor.call("get_enviroment", (err, resp) => {
      if (err) console.log(err);
      console.log(resp);
    })
  );
  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
