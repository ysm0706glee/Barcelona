import React from "react";
import { format } from "date-fns";

const Match = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="bg-gray-800 text-white flex flex-col items-center content-center w-9/12 mx-auto p-12 drop-shadow-2xl">
          <div>
            <span>{data.league.name}</span>
            <span> ・ </span>
            <span>{format(new Date(data.fixture.date), "MMM d, H:mm")}</span>
          </div>

          <div className="w-9/12 flex justify-around">
            <div>
              <img
                src={data.teams.home.logo}
                alt={`${data.teams.away.name}'s logo`}
              />
              <span className="block text-center">{data.teams.home.name}</span>
            </div>

            {data.goals.home && data.goals.away ? (
              <>
                <span className="self-center">{data.goals.home}</span>
                <span className="self-center">-</span>
                <span className="self-center">{data.goals.away}</span>
              </>
            ) : (
              <span className="self-center">VS</span>
            )}

            <div>
              <img
                src={data.teams.away.logo}
                alt={`${data.teams.away.name}'s logo`}
              />
              <span className="block text-center">{data.teams.away.name}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Match;
