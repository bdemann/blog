import React from "react";
import * as styles from "./tier-table.module.css";

const TierTable = ({ columns, data }) => {
    return (
        <div className={styles.tableContainer}>
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
        </div>
    );
};

export default TierTable;
