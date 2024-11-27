import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Fonts from "../../components/fonts";
import TierTable from "../../components/tier-table";
import blueyData from "../../data/tiers/bluey.json";
import { pageHeader } from "../../styles/common.module.css";
import {
    statsTable,
    statsContainer,
    cell,
    headerCell,
    headerCellLeft,
    dataCell,
    totalRow,
} from "./bluey.module.css";

const calculateStats = (episodes) => {
    const stats = {
        1: { S: 0, A: 0, B: 0, C: 0, D: 0, F: 0, total: 0 },
        2: { S: 0, A: 0, B: 0, C: 0, D: 0, F: 0, total: 0 },
        3: { S: 0, A: 0, B: 0, C: 0, D: 0, F: 0, total: 0 },
        all: { S: 0, A: 0, B: 0, C: 0, D: 0, F: 0, total: 0 },
    };

    episodes.forEach((episode) => {
        stats[episode.season][episode.ranking]++;
        stats[episode.season].total++;
        stats.all[episode.ranking]++;
        stats.all.total++;
    });

    return stats;
};

const formatPercentage = (num, total) => {
    return ((num / total) * 100).toFixed(1) + "%";
};

const BlueyTierList = () => {
    const stats = calculateStats(blueyData.episodes);

    return (
        <Layout>
            <h1 className={pageHeader}>{blueyData.title}</h1>
            <p>{blueyData.description}</p>
            <p>
                Subjective Criteria
                <ul>
                    <li>
                        S Tier: Perfect episode
                        <ul>
                            <li>
                                Stop everything to watch. Resonates deeply, has
                                memorable moments or lessons, and appeals
                                equally to kids and adults.
                            </li>
                        </ul>
                    </li>
                    <li>
                        A Tier: Great episode
                        <ul>
                            <li>
                                Always happy to watch. Strong message or
                                entertainment value but not quite "perfect."
                            </li>
                        </ul>
                    </li>
                    <li>
                        B Tier: Good episode
                        <ul>
                            <li>
                                Enjoyable but not always a standout. Solid
                                storytelling and humor.
                            </li>
                        </ul>
                    </li>
                    <li>
                        C Tier: Okay episode
                        <ul>
                            <li>
                                Fine to leave on but doesn't captivate you.
                                Might be forgettable or have a weaker theme.
                            </li>
                        </ul>
                    </li>
                    <li>
                        D Tier: Weak episode
                        <ul>
                            <li>
                                Rarely enjoyable. Lacks the charm or quality of
                                better episodes.
                            </li>
                        </ul>
                    </li>
                    <li>
                        F Tier: Unwatchable
                        <ul>
                            <li>
                                Actively disliked. Poor message, annoying
                                elements, or inappropriate tone.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>

            <h2>Statistics</h2>
            <div className={statsContainer}>
                <table className={statsTable}>
                    <thead>
                        <tr>
                            <th className={headerCellLeft}>Season</th>
                            <th className={headerCell} colSpan="2">
                                S Tier
                            </th>
                            <th className={headerCell} colSpan="2">
                                A Tier
                            </th>
                            <th className={headerCell} colSpan="2">
                                B Tier
                            </th>
                            <th className={headerCell} colSpan="2">
                                C Tier
                            </th>
                            <th className={headerCell} colSpan="2">
                                D Tier
                            </th>
                            <th className={headerCell} colSpan="2">
                                F Tier
                            </th>
                            <th className={headerCell}>Total</th>
                        </tr>
                        <tr>
                            <th className={cell}></th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                            <th className={headerCell}>%</th>
                            <th className={headerCell}>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map((season) => (
                            <tr key={season}>
                                <td className={cell}>Season {season}</td>
                                <td className={dataCell}>{stats[season].S}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].S,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>{stats[season].A}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].A,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>{stats[season].B}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].B,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>{stats[season].C}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].C,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>{stats[season].D}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].D,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>{stats[season].F}</td>
                                <td className={dataCell}>
                                    {formatPercentage(
                                        stats[season].F,
                                        stats[season].total
                                    )}
                                </td>
                                <td className={dataCell}>
                                    {stats[season].total}
                                </td>
                            </tr>
                        ))}
                        <tr className={totalRow}>
                            <td className={cell}>All Seasons</td>
                            <td className={dataCell}>{stats.all.S}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.S, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.A}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.A, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.B}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.B, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.C}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.C, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.D}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.D, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.F}</td>
                            <td className={dataCell}>
                                {formatPercentage(stats.all.F, stats.all.total)}
                            </td>
                            <td className={dataCell}>{stats.all.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Episodes</h2>
            <TierTable columns={blueyData.columns} data={blueyData.episodes} />
        </Layout>
    );
};

export const Head = () => (
    <>
        <Seo title="Bluey Tier List" />
        <Fonts />
    </>
);

export default BlueyTierList;
