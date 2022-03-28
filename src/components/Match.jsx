import React from "react";
import { format } from "date-fns";

const Match = ({ data }) => {
  return (
    <>
      {data ? (
        <div>
          <div>
            <span>{data.league.name}</span>
            <span> ・ </span>
            <span>{format(new Date(data.fixture.date), "MMM d, H:mm")}</span>
          </div>
          <div className="flex justify-around">
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
