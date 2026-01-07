// Menu storage management - handles reading/writing menu data
function getMenuData() {
    // Try to load from localStorage first
    const stored = localStorage.getItem('menuData');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing stored menu data:', e);
        }
    }
    
    // Fall back to default data from data.js
    return {
        data: window.menuData,
        order: window.sectionOrder
    };
}

function saveMenuData(data, order) {
    const toStore = {
        data: data,
        order: order,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('menuData', JSON.stringify(toStore));
    return true;
}

function resetMenuData() {
    localStorage.removeItem('menuData');
}

// Initialize menu variables for use in pages
const currentMenu = getMenuData();
const menuData = currentMenu.data;
const sectionOrder = currentMenu.order;
