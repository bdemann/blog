import React, { useState } from "react";
import * as styles from "./tier-table.module.css";

const TierTable = ({ columns, data }) => {
    const [activeTab, setActiveTab] = useState("table"); // 'table' or 'grouped'

    const groupedData = {
        S: data.filter((item) => item.ranking === "S"),
        A: data.filter((item) => item.ranking === "A"),
        B: data.filter((item) => item.ranking === "B"),
        C: data.filter((item) => item.ranking === "C"),
        D: data.filter((item) => item.ranking === "D"),
        F: data.filter((item) => item.ranking === "F"),
    };

    const renderTable = () => (
        <table className={styles.tierTable}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.key}>{row[column.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderGrouped = () => (
        <div className={styles.groupedView}>
            {Object.entries(groupedData).map(([tier, items]) => (
                <div key={tier} className={styles.tierGroup}>
                    <h3 className={styles.tierTitle}>Tier {tier}</h3>
                    {items.length > 0 ? (
                        <table className={styles.tierTable}>
                            <thead>
                                <tr>
                                    {columns
                                        .filter((col) => col.key !== "ranking")
                                        .map((column) => (
                                            <th key={column.key}>
                                                {column.label}
                                            </th>
                                        ))}
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((row, index) => (
                                    <tr key={index}>
                                        {columns
                                            .filter(
                                                (col) => col.key !== "ranking"
                                            )
                                            .map((column) => (
                                                <td key={column.key}>
                                                    {row[column.key]}
                                                </td>
                                            ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className={styles.emptyTier}>
                            No items in this tier
                        </p>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tabButtons}>
                <button
                    className={`${styles.tabButton} ${
                        activeTab === "table" ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab("table")}
                >
                    Table View
                </button>
                <button
                    className={`${styles.tabButton} ${
                        activeTab === "grouped" ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab("grouped")}
                >
                    Grouped View
                </button>
            </div>
            {activeTab === "table" ? renderTable() : renderGrouped()}
        </div>
    );
};

export default TierTable;
