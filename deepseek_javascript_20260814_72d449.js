// Configuration management
const ConfigManager = { ... }

// Data storage (XML)
const DataManager = { 
    getWeekKey, 
    loadTasks, 
    saveTasks, 
    loadLogs, 
    saveLogs,
    getCurrentWeek,
    getAllWeeks
}

// Task management
const TaskManager = { 
    create, 
    read, 
    update, 
    delete, 
    getAll, 
    getByWeek 
}

// Task Log management
const LogManager = { 
    create, 
    read, 
    update, 
    delete, 
    getByTask, 
    getByDate, 
    getByWeek 
}

// Dashboard
const Dashboard = { 
    render, 
    updateCharts, 
    updateDailyView, 
    updateWeeklyView 
}

// Reports
const ReportManager = { 
    generateDailyReport, 
    exportPDF, 
    exportHTML 
}

// UI/Router
const App = { 
    init, 
    navigate, 
    render 
}