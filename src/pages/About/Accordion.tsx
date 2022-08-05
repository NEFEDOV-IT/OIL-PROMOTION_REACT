import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper' : {
        color: '#0478b3',
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: '#0478b3',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    textAlign: 'left',
}));

const styleAccordion = {
    maxWidth: 1100,
    color: '#455a64',
    margin: '0 auto',
    boxShadow: 10,
    textAlign: 'left',
}

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <section className={'accordion'}>
            <Accordion
                sx={styleAccordion}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>How to buy oil from you?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To buy oil, you can contact the contact numbers in the "Contacts" section or write to us by mail <a className={'accordion__link'} href={'mailto: mail@mail.ru'}>mail@mail.ru</a> indicating the quantity required.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={styleAccordion} expanded={expanded === 'panel2'}
                       onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>What payment methods do you have?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        At the conclusion of the contract, you can make an advance payment for the declared goods, which guarantees its reservation for you. It is also possible to pay 50/50 or postpaid, in which case the availability of the goods is not guaranteed and the reservation is not possible.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={styleAccordion} expanded={expanded === 'panel3'}
                       onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>How can you deliver?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Delivery of the Goods to the destination is possible by auto-cisterns, railway tanks and tankers. Contact our managers and they will select a convenient delivery method for you.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </section>
    );
}
