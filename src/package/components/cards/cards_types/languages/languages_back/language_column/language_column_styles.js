import { createScreenWidthMediaQuery } from '../../../../../../utils/styles/styles_utils';

const MIN = 30;
const MAX = 100;

export const styles = (theme) => {
    const {
        miscellaneous: { spacing },
        screenSizes
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);

    return {
        // Offset value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        container: ({ value, color, itemsSize }) => ({
            height: `${((value - 0) * (MAX - MIN)) / (MAX - 0) + MIN}%`,
            width: `${100 / itemsSize}%`,
            backgroundColor: color,
            color: '#fff',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: [spacing * 3, spacing * 2]
        }),
        typography: {
            transform: 'rotate(-90deg)'
        },
        columnsContainer: {
            [QUERY_SMALL]: {
                paddingTop: theme.miscellaneous.spacing * 2
            }
        }
    };
};