import React from 'react';
import { Stack, useTheme } from '@mui/material';
import { useInspectorDrawerOpen, useSamplesDrawerOpen } from '../documents/editor/EditorContext';
import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from './InspectorDrawer';
import SamplesDrawer, { SAMPLES_DRAWER_WIDTH } from './SamplesDrawer';
import TemplatePanel from './TemplatePanel';
function useDrawerTransition(cssProperty, open) {
    const { transitions } = useTheme();
    return transitions.create(cssProperty, {
        easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
        duration: !open ? transitions.duration.leavingScreen : transitions.duration.enteringScreen,
    });
}
export default function App() {
    const inspectorDrawerOpen = useInspectorDrawerOpen();
    const samplesDrawerOpen = useSamplesDrawerOpen();
    const marginLeftTransition = useDrawerTransition('margin-left', samplesDrawerOpen);
    const marginRightTransition = useDrawerTransition('margin-right', inspectorDrawerOpen);
    return (React.createElement(React.Fragment, null,
        React.createElement(InspectorDrawer, null),
        React.createElement(SamplesDrawer, null),
        React.createElement(Stack, { sx: {
                marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
                marginLeft: samplesDrawerOpen ? `${SAMPLES_DRAWER_WIDTH}px` : 0,
                transition: [marginLeftTransition, marginRightTransition].join(', '),
            } },
            React.createElement(TemplatePanel, null))));
}
//# sourceMappingURL=index.js.map