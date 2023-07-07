import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import BarChart from 'react-bar-chart';
import { Row, Col } from 'reactstrap';
import ComparisonChart from '../charts/echarts/ComparisonChart';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  marginRight: '.5rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const data = [
  ['Qty'],
  ['Kapal Penyebrang', 2200],
  ['Kapal Penumpang', 800],
  ['General Cargo', 700],
  ['Kapal Barang', 1500],
];

const dataPie1 = [
  {
    value: 65,
    name: 'Accepted',
  },
  {
    value: 20,
    name: 'Submited',
  },
];

const dataPie2 = [
  {
    value: 65,
    name: 'OnGoing',
  },
  {
    value: 20,
    name: 'Finished',
  },
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));
const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          {/* <Grid item lg={8} md={8} sm={12} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid> */}
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Total Vessel</Title>
              <ComparisonChart
                height="680px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                data={data}
              />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Total Order</Title>
              {/* <SubTitle>Last 30 days</SubTitle> */}

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                data={dataPie1}
              />
            </Card>

            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Total Project</Title>
              {/* <SubTitle>Last 30 days</SubTitle> */}

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                data={dataPie2}
              />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Vessel Status</Title>
              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>
                  0
                </i>{' '}
                Overdue Surveys / Audits
              </p>
              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>0</i> Overdue Finding
              </p>

              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>
                  0
                </i>{' '}
                Survey / Audits Overdue Within 180 Days
              </p>
              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>0</i> Finding Overdue
                Within 180 Days
              </p>

              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>
                  0
                </i>{' '}
                Certificates Expiring in 180 Days
              </p>
              <p style={{ fontWeight: 'bold', fontSize: '17px' }}>
                <i style={{ color: '#FF6962' }}>0</i> Attendance in
                Progress
              </p>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <div
                className="text-center"
                style={{
                  backgroundColor: '#e8f4ea',
                  color: '#b8d8be',
                  fontWeight: 'bold',
                  padding: '34px',
                  borderRadius: '1em',
                }}
              >
                <p style={{ fontSize: '50px', paddingTop: '20px' }}>
                  0
                </p>
                <p>Survey/Audits</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <div
                className="text-center"
                style={{
                  backgroundColor: '#FFDF9E',
                  color: '#FF971A',
                  fontWeight: 'bold',
                  padding: '34px',
                  borderRadius: '1em',
                }}
              >
                <p style={{ fontSize: '50px', paddingTop: '20px' }}>
                  0
                </p>
                <p>Findings</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <div
                className="text-center"
                style={{
                  backgroundColor: '#BFD4DB',
                  color: '#78A2CC',
                  fontWeight: 'bold',
                  padding: '34px',
                  borderRadius: '1em',
                }}
              >
                <p style={{ fontSize: '50px', paddingTop: '20px' }}>
                  0
                </p>
                <p>Certificates</p>
              </div>
            </Card>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <div
                className="text-center"
                style={{
                  backgroundColor: '#FFA9A9',
                  color: '#FF6962',
                  fontWeight: 'bold',
                  padding: '34px',
                  borderRadius: '1em',
                }}
              >
                <p style={{ fontSize: '50px', paddingTop: '20px' }}>
                  0
                </p>
                <p>Survey / Audits</p>
              </div>
            </Card>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};
export default Analytics;

