import React from "react";
import {
    statsTable,
    statsContainer,
    cell,
    headerCell,
    headerCellLeft,
    dataCell,
    totalRow,
} from "./bluey-stats.module.css";

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

const BlueyStats = ({ episodes }) => {
    const stats = calculateStats(episodes);

    return (
        <>
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
        </>
    );
};

export default BlueyStats;
