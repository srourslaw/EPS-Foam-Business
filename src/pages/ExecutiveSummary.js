import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, TrendingUp, Percent, CheckCircle, AlertCircle, Download } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import { executiveSummary } from '../data/businessData';

const ExecutiveSummary = () => {
  const navigate = useNavigate();

  const iconMap = {
    clock: Clock,
    dollarSign: DollarSign,
    trendingUp: TrendingUp,
    percent: Percent
  };

  const downloadFullReport = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EPS Foam Cutting Business - Comprehensive Market Research Report</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
            line-height: 1.7;
            color: #1e293b;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 40px 20px;
        }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 60px; border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
        h1 { font-size: 42px; color: #1e293b; margin-bottom: 16px; font-weight: 800; page-break-after: avoid; }
        h2 { font-size: 32px; color: #1e293b; margin: 48px 0 20px 0; font-weight: 700; border-bottom: 3px solid #3b82f6; padding-bottom: 12px; page-break-after: avoid; }
        h3 { font-size: 24px; color: #1e293b; margin: 28px 0 14px 0; font-weight: 600; page-break-after: avoid; }
        h4 { font-size: 18px; color: #1e293b; margin: 20px 0 10px 0; font-weight: 600; }
        p { margin-bottom: 16px; color: #64748b; font-size: 16px; line-height: 1.7; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 50px; border-radius: 16px; margin-bottom: 50px; }
        .header h1 { color: white; margin: 0; font-size: 48px; }
        .header p { color: rgba(255,255,255,0.95); margin: 12px 0 0 0; font-size: 18px; }
        .toc { background: #f8fafc; border: 2px solid #e2e8f0; padding: 30px; border-radius: 12px; margin: 40px 0; }
        .toc h2 { margin-top: 0; border: none; }
        .toc ul { list-style: none; padding: 0; }
        .toc li { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .toc li:last-child { border-bottom: none; }
        .toc a { color: #3b82f6; text-decoration: none; font-weight: 500; }
        .toc a:hover { text-decoration: underline; }
        .recommendation { background: #ecfdf5; border: 2px solid #6ee7b7; padding: 30px; border-radius: 12px; margin: 30px 0; }
        .recommendation h3 { color: #059669; margin-top: 0; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 24px 0; }
        .metric { background: #f8fafc; padding: 24px; border-radius: 12px; border-left: 4px solid #3b82f6; }
        .metric-label { font-size: 14px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; font-weight: 600; }
        .metric-value { font-size: 32px; font-weight: 800; color: #3b82f6; margin-bottom: 4px; }
        .metric-subtitle { font-size: 13px; color: #94a3b8; }
        .section { margin: 40px 0; padding: 35px; background: #f8fafc; border-radius: 12px; }
        .subsection { margin: 24px 0; padding: 24px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
        ul, ol { margin: 16px 0; padding-left: 28px; }
        li { margin: 10px 0; color: #64748b; line-height: 1.7; }
        table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 15px; }
        th, td { padding: 14px 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
        th { background: #f1f5f9; font-weight: 600; color: #1e293b; }
        tr:hover { background: #f8fafc; }
        .strengths { background: #ecfdf5; border-left: 4px solid #10b981; padding: 24px; border-radius: 8px; margin: 20px 0; }
        .weaknesses { background: #fef2f2; border-left: 4px solid #ef4444; padding: 24px; border-radius: 8px; margin: 20px 0; }
        .opportunities { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 24px; border-radius: 8px; margin: 20px 0; }
        .threats { background: #fefce8; border-left: 4px solid #f59e0b; padding: 24px; border-radius: 8px; margin: 20px 0; }
        .risk-high { background: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; border-radius: 8px; margin: 16px 0; }
        .risk-medium { background: #fff7ed; border-left: 4px solid #ea580c; padding: 20px; border-radius: 8px; margin: 16px 0; }
        .risk-low { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 20px; border-radius: 8px; margin: 16px 0; }
        .callout { background: #eff6ff; border: 2px solid #3b82f6; padding: 24px; border-radius: 12px; margin: 24px 0; }
        .callout-warning { background: #fef3c7; border: 2px solid #f59e0b; }
        .callout-success { background: #dcfce7; border: 2px solid #10b981; }
        .footer { text-align: center; margin-top: 70px; padding-top: 50px; border-top: 2px solid #e2e8f0; color: #94a3b8; }
        .page-break { page-break-after: always; }
        strong { color: #1e293b; font-weight: 600; }
        code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 14px; font-family: 'Courier New', monospace; }
        @media print {
            body { background: white; padding: 0; }
            .container { box-shadow: none; padding: 40px; }
            h2 { page-break-before: always; }
            .page-break { page-break-after: always; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>EPS Foam Cutting Business</h1>
            <p style="font-size: 22px; margin-top: 12px;">Comprehensive Market Research Analysis</p>
            <p style="font-size: 16px; margin-top: 8px;">Hurstville & Padstow, Sydney</p>
            <p style="font-size: 14px; opacity: 0.85; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
                Prepared: November 2025 | Report Version: 2.0 | Classification: Business Confidential
            </p>
        </div>

        <!-- Table of Contents -->
        <div class="toc">
            <h2>Table of Contents</h2>
            <ul>
                <li><a href="#executive-summary">1. Executive Summary</a></li>
                <li><a href="#market-analysis">2. Market Size & Demand Analysis</a></li>
                <li><a href="#competitive-landscape">3. Competitive Landscape</a></li>
                <li><a href="#pricing-profitability">4. Pricing & Profitability Analysis</a></li>
                <li><a href="#location-analysis">5. Location-Specific Analysis</a></li>
                <li><a href="#industry-trends">6. Industry Trends & Future Outlook</a></li>
                <li><a href="#customer-acquisition">7. Customer Acquisition & Marketing</a></li>
                <li><a href="#regulatory">8. Regulatory & Compliance</a></li>
                <li><a href="#supply-chain">9. Supply Chain Analysis</a></li>
                <li><a href="#equipment">10. Equipment & Technology Investment</a></li>
                <li><a href="#success-metrics">11. Success Metrics & Benchmarking</a></li>
                <li><a href="#swot">12. SWOT Analysis</a></li>
                <li><a href="#risk-assessment">13. Risk Assessment Matrix</a></li>
                <li><a href="#action-plan">14. Action Plan</a></li>
                <li><a href="#go-no-go">15. Go/No-Go Recommendation</a></li>
            </ul>
        </div>

        <!-- Recommendation -->
        <div class="recommendation">
            <h3>✓ RECOMMENDATION: PROCEED WITH CAUTION - MODERATE OPPORTUNITY</h3>
            <p>The EPS foam cutting business presents a <strong>viable opportunity</strong> in the Hurstville/Padstow area, supported by strong construction fundamentals and strategic location advantages. However, success will require competitive differentiation, efficient operations, and strategic customer acquisition.</p>
            <p style="margin-top: 12px;"><strong>Key Supporting Factors:</strong> Location advantage in Canterbury-Bankstown LGA (22.5% construction businesses vs 17.1% NSW average), NSW building approvals +30.4%, industry margins 30-50%, construction market projected to reach USD $523B by 2030.</p>
            <p style="margin-top: 12px;"><strong>Critical Success Factors:</strong> Service differentiation through same-day delivery, small order acceptance, specialized cutting capabilities. Initial capital requirement $180k-$250k with 18-24 month break-even timeline.</p>
        </div>

        <!-- 1. Executive Summary -->
        <h2 id="executive-summary">1. EXECUTIVE SUMMARY</h2>

        <h3>Key Findings</h3>
        <div class="metrics">
            <div class="metric">
                <div class="metric-label">Break-Even Timeline</div>
                <div class="metric-value">18-24 months</div>
                <div class="metric-subtitle">Conservative estimate</div>
            </div>
            <div class="metric">
                <div class="metric-label">Initial Investment</div>
                <div class="metric-value">$180k-$250k</div>
                <div class="metric-subtitle">Equipment, setup, inventory</div>
            </div>
            <div class="metric">
                <div class="metric-label">Year 1 Revenue</div>
                <div class="metric-value">$250k-$400k</div>
                <div class="metric-subtitle">Conservative to moderate</div>
            </div>
            <div class="metric">
                <div class="metric-label">Year 3 Revenue</div>
                <div class="metric-value">$600k-$900k</div>
                <div class="metric-subtitle">Established operations</div>
            </div>
            <div class="metric">
                <div class="metric-label">Year 3 Net Margin</div>
                <div class="metric-value">25-35%</div>
                <div class="metric-subtitle">Industry benchmark 10-25%</div>
            </div>
            <div class="metric">
                <div class="metric-label">Target Market (20km)</div>
                <div class="metric-value">$65-90M</div>
                <div class="metric-subtitle">Annual addressable market</div>
            </div>
        </div>

        <div class="section">
            <h3>Critical Success Factors</h3>
            <ol>
                <li><strong>Location Advantage:</strong> Positioned in Canterbury-Bankstown LGA where construction businesses represent 22.5% of all registered businesses (vs 17.1% NSW average) - 31% higher construction density</li>
                <li><strong>Market Timing:</strong> NSW building approvals increased 30.4% in September 2025; Australian construction market projected to reach USD $523 billion by 2030</li>
                <li><strong>Competitive Gap:</strong> Service differentiation through same-day delivery, small order acceptance ($0 minimum vs $250-$500 competitors), and specialized cutting capabilities</li>
                <li><strong>Equipment Investment:</strong> Initial capital requirement of $130,000-$180,000 for quality CNC hot wire cutting equipment (Australian-made Wintech preferred)</li>
                <li><strong>Profit Potential:</strong> Industry margins of 30-50% wholesale, with construction-related businesses averaging 25% net profit margins after CODB</li>
            </ol>
        </div>

        <div class="section">
            <h3>Top 3 Risks</h3>
            <ol>
                <li><strong>Competitive Saturation:</strong> Well-established players (The Foam Company, Ausblox, Foamex) with national distribution networks control 70-75% market share</li>
                <li><strong>Cost Volatility:</strong> EPS raw material costs linked to petroleum prices; construction cost escalation averaging 4.5-6% annually</li>
                <li><strong>Market Concentration:</strong> Heavy reliance on construction sector (44.8% of EPS market) creates cyclical revenue exposure</li>
            </ol>
        </div>

        <div class="callout callout-success">
            <h4>Financial Overview (Conservative Estimate)</h4>
            <ul style="margin-top: 12px;">
                <li><strong>Initial Investment Required:</strong> $180,000-$250,000 (equipment, setup, initial inventory)</li>
                <li><strong>Year 1 Revenue Potential:</strong> $250,000-$400,000</li>
                <li><strong>Break-Even Timeline:</strong> 18-24 months</li>
                <li><strong>Year 3 Revenue Projection:</strong> $600,000-$900,000</li>
                <li><strong>Year 3 Net Profit:</strong> $150,000-$315,000 (25-35% margin)</li>
            </ul>
        </div>

        <!-- 2. Market Analysis -->
        <h2 id="market-analysis" class="page-break">2. MARKET SIZE & DEMAND ANALYSIS</h2>

        <h3>2.1 Global & Australian Context</h3>
        <div class="section">
            <h4>Global EPS Market</h4>
            <div class="metrics">
                <div class="metric">
                    <div class="metric-label">2024 Market Size</div>
                    <div class="metric-value">$10.4-17.8B</div>
                    <div class="metric-subtitle">USD</div>
                </div>
                <div class="metric">
                    <div class="metric-label">2030-2033 Projection</div>
                    <div class="metric-value">$14.6-29.0B</div>
                    <div class="metric-subtitle">USD</div>
                </div>
                <div class="metric">
                    <div class="metric-label">CAGR</div>
                    <div class="metric-value">3.05-5.6%</div>
                    <div class="metric-subtitle">Compound annual growth</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Asia-Pacific Share</div>
                    <div class="metric-value">41%</div>
                    <div class="metric-subtitle">Largest regional market</div>
                </div>
            </ul>

            <h4>Australian Construction Market</h4>
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>2025</th>
                        <th>2030 Projection</th>
                        <th>CAGR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Market Size (USD)</td>
                        <td>$180.90 billion</td>
                        <td>$230.89-523.88 billion</td>
                        <td>5-8%</td>
                    </tr>
                    <tr>
                        <td>NSW Building Approvals</td>
                        <td>+30.4% (Sept 2025)</td>
                        <td>Continued growth</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>Residential Building Value</td>
                        <td>$10.11 billion (+7.4%)</td>
                        <td>Strong growth expected</td>
                        <td>—</td>
                    </tr>
                </tbody>
            </table>

            <h4>EPS Application Breakdown by Market Share</h4>
            <ul>
                <li><strong>Construction & Building:</strong> 44.8% (Primary target market)</li>
                <li><strong>Packaging:</strong> 28.3% (Secondary opportunity)</li>
                <li><strong>Automotive:</strong> 8.5%</li>
                <li><strong>Electronics:</strong> 7.2%</li>
                <li><strong>Other Industries:</strong> 11.2% (Marine, events, signage, arts)</li>
            </ul>
        </div>

        <h3>2.2 Sydney Metropolitan Market</h3>
        <div class="section">
            <h4>Canterbury-Bankstown LGA (includes Padstow)</h4>
            <table>
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        <th>Value</th>
                        <th>Comparison</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Registered Businesses</td>
                        <td>~35,000</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>Construction Business %</td>
                        <td>22.5%</td>
                        <td>NSW avg: 17.1% (+31% higher)</td>
                    </tr>
                    <tr>
                        <td>Construction Businesses</td>
                        <td>~7,875</td>
                        <td>High concentration</td>
                    </tr>
                    <tr>
                        <td>Location Position</td>
                        <td>Central Sydney</td>
                        <td>15-30 min to major centers</td>
                    </tr>
                    <tr>
                        <td>Population Growth</td>
                        <td>Strong</td>
                        <td>Infrastructure development planned</td>
                    </tr>
                </tbody>
            </table>

            <h4>Hurstville (Georges River Council)</h4>
            <ul>
                <li><strong>Distance from CBD:</strong> 14-19km south</li>
                <li><strong>Part of:</strong> St George region</li>
                <li><strong>Major Features:</strong> Westfield Shopping Centre, transport hub (Illawarra railway line)</li>
                <li><strong>Industrial/Commercial:</strong> Excellent accessibility via Princes Highway, M5 Motorway</li>
                <li><strong>Business Demographics:</strong> Mixed retail, commercial, and light industrial</li>
            </ul>

            <h4>Padstow Location Advantages</h4>
            <ul>
                <li><strong>Distance from CBD:</strong> 19km south-west</li>
                <li><strong>Industrial Character:</strong> Strong industrial presence, proximity to M5 Motorway</li>
                <li><strong>Neighboring Areas:</strong> Bunnings, industrial estates, manufacturing zones</li>
                <li><strong>Accessibility:</strong> Excellent logistics access for delivery operations</li>
                <li><strong>M5 Motorway:</strong> 5-10 minutes access, critical for rapid Sydney-wide delivery</li>
            </ul>
        </div>

        <h3>2.3 Total Addressable Market (TAM)</h3>
        <div class="section">
            <h4>20km Radius Market Sizing</h4>

            <div class="subsection">
                <h4>Construction Sector (Primary Target)</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Segment</th>
                            <th>Count (20km radius)</th>
                            <th>Annual EPS Demand</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Construction Businesses</td>
                            <td>12,000-15,000</td>
                            <td>$45-65 million</td>
                        </tr>
                        <tr>
                            <td>Active Residential Builders</td>
                            <td>3,500-4,500</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>Commercial Construction Companies</td>
                            <td>1,200-1,800</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>Renovation Contractors</td>
                            <td>2,800-3,500</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td><strong>Custom Cutting Services Market</strong></td>
                            <td>—</td>
                            <td><strong>$12-18 million</strong></td>
                        </tr>
                        <tr>
                            <td>Realistic Capture (2-5% share)</td>
                            <td>—</td>
                            <td><strong>$240k-$900k</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="subsection">
                <h4>Secondary Market Segments</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Segment</th>
                            <th>Companies (20km)</th>
                            <th>Annual Demand</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Packaging & Logistics</td>
                            <td>800-1,200 manufacturers</td>
                            <td>$8-12 million</td>
                        </tr>
                        <tr>
                            <td>Events & Entertainment</td>
                            <td>300-450 event companies</td>
                            <td>$3-5 million</td>
                        </tr>
                        <tr>
                            <td>Marine Industry</td>
                            <td>40-60 boat builders</td>
                            <td>$1.5-2.5 million</td>
                        </tr>
                        <tr>
                            <td>Signage & Marketing</td>
                            <td>250-350 signage companies</td>
                            <td>$4-6 million</td>
                        </tr>
                        <tr>
                            <td>Arts, Crafts & Landscaping</td>
                            <td>200-300 landscape designers</td>
                            <td>$2-3 million</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="callout">
                <h4>Total Addressable Market Summary</h4>
                <p><strong>$65-90 million annually</strong> within 20km radius</p>
                <p style="margin-top: 8px;">Realistic first-year capture of 0.3-0.6% = <strong>$200,000-$540,000</strong></p>
                <p style="margin-top: 8px;">Target Year 3 capture of 1-1.5% = <strong>$650,000-$1,350,000</strong></p>
            </div>
        </div>

        <h3>2.4 Market Growth Drivers</h3>
        <div class="section">
            <h4>Short-term (2025-2027)</h4>
            <ul>
                <li><strong>NSW Construction Recovery:</strong> Residential building approvals up 30.4% (September 2025), total dwellings approved 17,019 (+12%), residential building value $10.11 billion (+7.4%)</li>
                <li><strong>Infrastructure Investment:</strong> Federal 2025-26 budget $17.1 billion for transport corridors, NSW rolling capital program $19.3 billion annually</li>
                <li><strong>Housing Shortage:</strong> Australia needs 240,000 annual approvals to rebalance supply, current approvals trending toward target</li>
                <li><strong>Construction Employment:</strong> Record low 3.2% unemployment indicating strong activity</li>
            </ul>

            <h4>Medium-term (2027-2030)</h4>
            <ul>
                <li><strong>Brisbane 2032 Olympics Impact:</strong> Total infrastructure spend $7.1 billion+, construction cost escalation in Brisbane +10% (2027-2032), spillover construction demand across Eastern Australia</li>
                <li><strong>Sustainability Mandates:</strong> National Construction Code 2025 mandates energy efficiency retrofits, growing EPS insulation demand for thermal performance</li>
                <li><strong>E-commerce Growth:</strong> Online retail expansion continuing, protective packaging demand increasing 5-7% annually</li>
            </ul>
        </div>

        <h3>2.5 Seasonal Demand Patterns</h3>
        <div class="section">
            <h4>Construction Industry Cyclicality</h4>
            <ul>
                <li><strong>Peak Seasons:</strong> September-March (warmer months, optimal building conditions)</li>
                <li><strong>Slower Periods:</strong> June-August (winter construction slowdown)</li>
                <li><strong>Volume Variation:</strong> 25-35% fluctuation between peak and trough</li>
            </ul>

            <h4>Mitigation Strategies</h4>
            <ul>
                <li>Diversify into packaging/events during construction slow periods</li>
                <li>Build inventory during low seasons for peak season delivery</li>
                <li>Target renovation work (less seasonal than new construction)</li>
            </ul>
        </div>

        <!-- 3. Competitive Landscape -->
        <h2 id="competitive-landscape" class="page-break">3. COMPETITIVE LANDSCAPE ANALYSIS</h2>

        <h3>3.1 Major Direct Competitors</h3>
        <div class="section">
            <table>
                <thead>
                    <tr>
                        <th>Competitor</th>
                        <th>Market Share</th>
                        <th>Strengths</th>
                        <th>Weaknesses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>The Foam Company</strong></td>
                        <td>20-25%</td>
                        <td>National reach, established brand, comprehensive product range</td>
                        <td>Minimum order $250, 1-4 day lead times</td>
                    </tr>
                    <tr>
                        <td><strong>Ausblox Pty Ltd</strong></td>
                        <td>15-20%</td>
                        <td>Local Sydney manufacturing, quick turnaround, recycling capability</td>
                        <td>Capacity constraints during peak periods</td>
                    </tr>
                    <tr>
                        <td><strong>Foamex</strong></td>
                        <td>15-18%</td>
                        <td>8 manufacturing facilities, CNC shaping, sustainability focus</td>
                        <td>May prioritize large commercial clients</td>
                    </tr>
                    <tr>
                        <td><strong>Foam Sales</strong></td>
                        <td>10-12%</td>
                        <td>Competitive pricing for bulk orders</td>
                        <td>Minimum order $500, up to 2 weeks shipping</td>
                    </tr>
                    <tr>
                        <td><strong>Australian Custom Foam</strong></td>
                        <td>5-8%</td>
                        <td>Regional St George coverage, custom service focus</td>
                        <td>Limited information on capacity</td>
                    </tr>
                    <tr>
                        <td><strong>Regional/Smaller Players</strong></td>
                        <td>15-20%</td>
                        <td>Niche applications, local relationships</td>
                        <td>Limited equipment and capacity</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>3.2 Competitive Positioning Matrix</h3>
        <div class="section">
            <table>
                <thead>
                    <tr>
                        <th>Factor</th>
                        <th>The Foam Co</th>
                        <th>Ausblox</th>
                        <th>Foamex</th>
                        <th>Foam Sales</th>
                        <th><strong>Opportunity Gap</strong></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Minimum Order</td>
                        <td>$250</td>
                        <td>Not stated</td>
                        <td>Not stated</td>
                        <td>$500</td>
                        <td><strong>&lt;$250 orders</strong></td>
                    </tr>
                    <tr>
                        <td>Lead Time</td>
                        <td>1-4 days</td>
                        <td>Quick</td>
                        <td>Standard</td>
                        <td>Up to 2 weeks</td>
                        <td><strong>Same-day service</strong></td>
                    </tr>
                    <tr>
                        <td>Local Presence</td>
                        <td>Distribution</td>
                        <td>Manufacturing</td>
                        <td>Manufacturing</td>
                        <td>Partner</td>
                        <td><strong>Hurstville/Padstow base</strong></td>
                    </tr>
                    <tr>
                        <td>Small Orders</td>
                        <td>Limited</td>
                        <td>Unknown</td>
                        <td>Limited</td>
                        <td>No</td>
                        <td><strong>Small order specialist</strong></td>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td>Competitive</td>
                        <td>Unknown</td>
                        <td>Mid-range</td>
                        <td>Bulk discount</td>
                        <td><strong>Transparent pricing</strong></td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td>Metro</td>
                        <td>Sydney area</td>
                        <td>National</td>
                        <td>National</td>
                        <td><strong>20km radius focus</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>3.3 Competitive Advantages Available</h3>
        <div class="section">
            <ol>
                <li><strong>Geographic Proximity:</strong> Located in industrial heartland, 30-60 minute faster delivery than competitors, lower freight costs, same-day delivery capability</li>
                <li><strong>Small Order Acceptance:</strong> $0 minimum vs $250-$500 competitor minimums, serve small builders/renovators/DIY, premium pricing acceptable for convenience</li>
                <li><strong>Same-Day/Rush Service:</strong> 30-50% premium pricing sustainable, typical lead times 1-14 days, emergency construction needs target</li>
                <li><strong>Specialized Cutting:</strong> CNC hot wire precision (±0.3-0.5mm), complex 2D and 3D shapes, signage/architectural/theatrical/marine</li>
                <li><strong>Customer Service:</strong> Direct owner involvement, technical consultation, design assistance, on-site measuring</li>
                <li><strong>Flexible Business Model:</strong> Custom scheduling, weekend/after-hours service, trial orders encouraged</li>
            </ol>
        </div>

        <!-- Continue with remaining sections... -->

        <!-- 4. Pricing & Profitability -->
        <h2 id="pricing-profitability" class="page-break">4. PRICING & PROFITABILITY ANALYSIS</h2>

        <h3>4.1 Raw Material Costs (2025 Estimates)</h3>
        <div class="section">
            <h4>EPS Foam Bulk Wholesale Pricing (per cubic meter)</h4>
            <table>
                <thead>
                    <tr>
                        <th>Density</th>
                        <th>Cost Range</th>
                        <th>Applications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>13 kg/m³</td>
                        <td>$180-$250/m³</td>
                        <td>Packaging, void fill, basic insulation</td>
                    </tr>
                    <tr>
                        <td>15 kg/m³</td>
                        <td>$220-$300/m³</td>
                        <td>General construction, standard insulation</td>
                    </tr>
                    <tr>
                        <td>20 kg/m³</td>
                        <td>$280-$380/m³</td>
                        <td>Heavy-duty packaging, structural applications</td>
                    </tr>
                    <tr>
                        <td>30 kg/m³</td>
                        <td>$380-$520/m³</td>
                        <td>High-performance insulation, specialty</td>
                    </tr>
                </tbody>
            </table>

            <h4>Standard Sheet Pricing (Retail Reference)</h4>
            <ul>
                <li>1200x2400mm x 50mm (15kg/m³): <strong>$25-$35</strong> per sheet</li>
                <li>1200x2400mm x 75mm (15kg/m³): <strong>$35-$48</strong> per sheet</li>
                <li>1200x2400mm x 100mm (15kg/m³): <strong>$45-$62</strong> per sheet</li>
            </ul>

            <h4>Volume Purchase Terms</h4>
            <ul>
                <li>Minimum order quantities: Typically 100-200 sheets for manufacturer-direct pricing</li>
                <li>Volume discounts: 10-20% for pallet quantities (300+ sheets)</li>
                <li>Payment terms: Usually 30 days net for established accounts, COD for new customers</li>
                <li>Price volatility: Linked to petroleum prices, typically 5-8% annual fluctuation</li>
            </ul>
        </div>

        <h3>4.2 Industry Markup & Margin Benchmarks</h3>
        <div class="section">
            <table>
                <thead>
                    <tr>
                        <th>Industry Sector</th>
                        <th>Wholesale Margin</th>
                        <th>Retail Margin</th>
                        <th>Net Margin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wholesale Industry Standards</td>
                        <td>30-50%</td>
                        <td>—</td>
                        <td>10-25%</td>
                    </tr>
                    <tr>
                        <td>Construction Supply Sector</td>
                        <td>30-35%</td>
                        <td>33-40%</td>
                        <td>8-12%</td>
                    </tr>
                    <tr>
                        <td>Foam/Insulation Industry</td>
                        <td>—</td>
                        <td>—</td>
                        <td>10-25%</td>
                    </tr>
                    <tr>
                        <td>Spray Foam (comparable)</td>
                        <td>50%</td>
                        <td>—</td>
                        <td>25%</td>
                    </tr>
                </tbody>
            </table>

            <div class="callout">
                <h4>Cost Structure Breakdown (Typical)</h4>
                <ul>
                    <li><strong>Material Cost:</strong> 40-50% of revenue</li>
                    <li><strong>Labor/Operations:</strong> 20-30% of revenue</li>
                    <li><strong>Overhead (CODB):</strong> 10-15% of revenue</li>
                    <li><strong>Net Profit:</strong> 10-25% of revenue</li>
                </ul>
            </div>
        </div>

        <h3>4.3 Proposed Pricing Strategy</h3>
        <div class="section">
            <h4>Material Markup Structure</h4>
            <table>
                <thead>
                    <tr>
                        <th>Product Type</th>
                        <th>Target Markup</th>
                        <th>Target Margin</th>
                        <th>Pricing Strategy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Standard Sheets (15kg/m³)</td>
                        <td>50-70%</td>
                        <td>33-41%</td>
                        <td>$40-$55/sheet</td>
                    </tr>
                    <tr>
                        <td>Premium Density (20-30kg)</td>
                        <td>60-80%</td>
                        <td>38-44%</td>
                        <td>Varies by density</td>
                    </tr>
                    <tr>
                        <td>Custom Simple Cuts</td>
                        <td>Material + $80/hr</td>
                        <td>35-40%</td>
                        <td>Project-based</td>
                    </tr>
                    <tr>
                        <td>Custom Complex Cuts</td>
                        <td>Material + $120/hr</td>
                        <td>40-45%</td>
                        <td>Project-based</td>
                    </tr>
                    <tr>
                        <td>Small Orders (&lt;$250)</td>
                        <td>70-90%</td>
                        <td>41-47%</td>
                        <td>Premium pricing</td>
                    </tr>
                </tbody>
            </table>

            <h4>Service Pricing</h4>
            <ul>
                <li>Standard Delivery (24-48 hours): <strong>$70</strong> within 20km</li>
                <li>Same-Day Delivery: <strong>$120-$150</strong> within 20km</li>
                <li>Rush Order Surcharge: <strong>+30%</strong> on material cost</li>
                <li>After-Hours Service: <strong>+40%</strong> on labor component</li>
                <li>Design/Consultation: <strong>$90/hour</strong> (credited toward orders >$500)</li>
            </ul>
        </div>

        <h3>4.4 Revenue Projections</h3>
        <div class="section">
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Year 1 (Conservative)</th>
                        <th>Year 2 (Growth)</th>
                        <th>Year 3 (Established)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monthly Revenue</td>
                        <td>$21k-$33k</td>
                        <td>$35k-$55k</td>
                        <td>$50k-$75k</td>
                    </tr>
                    <tr>
                        <td>Annual Revenue</td>
                        <td>$250k-$400k</td>
                        <td>$420k-$660k</td>
                        <td>$600k-$900k</td>
                    </tr>
                    <tr>
                        <td>Average Order Value</td>
                        <td>$450-$650</td>
                        <td>$550-$750</td>
                        <td>$650-$850</td>
                    </tr>
                    <tr>
                        <td>Orders Per Month</td>
                        <td>40-60</td>
                        <td>70-110</td>
                        <td>100-150</td>
                    </tr>
                    <tr>
                        <td>New Customers/Month</td>
                        <td>8-12</td>
                        <td>10-15</td>
                        <td>12-18</td>
                    </tr>
                    <tr>
                        <td>Active Customer Base</td>
                        <td>50-80</td>
                        <td>80-120</td>
                        <td>150-200</td>
                    </tr>
                    <tr>
                        <td>Repeat Business %</td>
                        <td>25-35%</td>
                        <td>60-70%</td>
                        <td>70-80%</td>
                    </tr>
                </tbody>
            </table>

            <h4>Revenue Breakdown by Customer Segment (Year 1)</h4>
            <table>
                <thead>
                    <tr>
                        <th>Segment</th>
                        <th>Revenue %</th>
                        <th>Annual Revenue</th>
                        <th>Avg Order</th>
                        <th>Frequency</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Small Builders/Renovators</td>
                        <td>35%</td>
                        <td>$88k-$140k</td>
                        <td>$350-$500</td>
                        <td>Weekly-BiWeekly</td>
                    </tr>
                    <tr>
                        <td>Commercial Construction</td>
                        <td>25%</td>
                        <td>$63k-$100k</td>
                        <td>$800-$1,200</td>
                        <td>Monthly</td>
                    </tr>
                    <tr>
                        <td>Packaging Companies</td>
                        <td>15%</td>
                        <td>$38k-$60k</td>
                        <td>$600-$900</td>
                        <td>BiWeekly-Monthly</td>
                    </tr>
                    <tr>
                        <td>Events/Signage</td>
                        <td>15%</td>
                        <td>$38k-$60k</td>
                        <td>$500-$800</td>
                        <td>Project-based</td>
                    </tr>
                    <tr>
                        <td>Other (Marine, Arts, etc.)</td>
                        <td>10%</td>
                        <td>$25k-$40k</td>
                        <td>$400-$700</td>
                        <td>Quarterly</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>4.5 Break-Even Analysis</h3>
        <div class="section">
            <h4>Fixed Costs (Monthly)</h4>
            <table>
                <thead>
                    <tr>
                        <th>Cost Category</th>
                        <th>Monthly Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Equipment Lease/Depreciation</td>
                        <td>$3,000-$4,000</td>
                    </tr>
                    <tr>
                        <td>Facility Rent (opportunity cost)</td>
                        <td>$2,500-$3,500</td>
                    </tr>
                    <tr>
                        <td>Utilities</td>
                        <td>$800-$1,200</td>
                    </tr>
                    <tr>
                        <td>Insurance</td>
                        <td>$600-$900</td>
                    </tr>
                    <tr>
                        <td>Marketing/Advertising</td>
                        <td>$1,000-$1,500</td>
                    </tr>
                    <tr>
                        <td>Administrative/Software</td>
                        <td>$400-$600</td>
                    </tr>
                    <tr>
                        <td><strong>Total Fixed Costs</strong></td>
                        <td><strong>$8,300-$11,700</strong></td>
                    </tr>
                </tbody>
            </table>

            <h4>Variable Costs (% of Revenue)</h4>
            <ul>
                <li>Raw Materials: <strong>40-45%</strong></li>
                <li>Labor (including owner): <strong>25-30%</strong></li>
                <li>Delivery/Freight: <strong>3-5%</strong></li>
                <li>Wire/Consumables: <strong>2-3%</strong></li>
                <li><strong>Total Variable Costs: 70-83%</strong> of revenue</li>
            </ul>

            <div class="callout callout-warning">
                <h4>Break-Even Calculation</h4>
                <ul>
                    <li>Monthly Fixed Costs: <strong>$10,000</strong> (midpoint)</li>
                    <li>Contribution Margin: <strong>30%</strong> (conservative, after variable costs)</li>
                    <li>Break-Even Revenue: $10,000 / 0.30 = <strong>$33,333/month</strong></li>
                    <li>Annual Break-Even: <strong>$400,000</strong></li>
                </ul>

                <h4 style="margin-top: 20px;">Break-Even Timeline Estimate: 18-24 months</h4>
                <ul>
                    <li>Months 1-6: Ramp-up, customer acquisition, revenue $8k-15k/month</li>
                    <li>Months 7-12: Growing operations, revenue $15k-25k/month</li>
                    <li>Months 13-18: Approaching break-even, revenue $25k-35k/month</li>
                    <li>Months 19-24: Surpass break-even, profitable operations</li>
                </ul>
            </div>
        </div>

        <!-- 4. LOCATION-SPECIFIC ANALYSIS -->
        <h2 id="location" class="page-break">4. LOCATION-SPECIFIC ANALYSIS (HURSTVILLE & PADSTOW)</h2>

        <div class="section">
          <h3>4.1 Area Demographics & Economic Indicators</h3>

          <h4>Canterbury-Bankstown LGA</h4>
          <ul>
            <li><strong>Population:</strong> ~370,000 (2021)</li>
            <li><strong>Households:</strong> ~115,000</li>
            <li><strong>Business Establishments:</strong> ~35,000</li>
            <li><strong>Construction Business Density:</strong> 22.5% (vs 17.1% NSW avg) = +31% higher</li>
            <li><strong>Primary Industries:</strong> Retail trade (10.2%), healthcare (13.0%), construction, transport (7.5%)</li>
            <li><strong>Strategic Position:</strong> Central Sydney, 15-30 minutes to major centers</li>
          </ul>

          <h4>Georges River Council (includes Hurstville)</h4>
          <ul>
            <li><strong>Population:</strong> ~155,000</li>
            <li><strong>St George Region:</strong> Hurstville, Kogarah, Rockdale, surrounding suburbs</li>
            <li><strong>Distance from CBD:</strong> 12-19km south</li>
            <li><strong>Major Centers:</strong> Westfield Hurstville, Kogarah Town Centre</li>
            <li><strong>Industrial Mix:</strong> Commercial, retail, light industrial, healthcare (St George Hospital)</li>
            <li><strong>Transport:</strong> Illawarra railway line, Princes Highway, proximity to Airport</li>
          </ul>

          <h4>Economic Activity Indicators</h4>
          <ul>
            <li><strong>Unemployment Rate (Sydney):</strong> 5.3% (higher than national, but stable)</li>
            <li><strong>Construction Employment:</strong> Record low 3.2% unemployment in construction = strong activity</li>
            <li><strong>Residential Construction:</strong> Strong apartment development, renovation activity</li>
            <li><strong>Commercial Activity:</strong> Ongoing retail, healthcare, mixed-use developments</li>
          </ul>
        </div>

        <div class="section">
          <h3>4.2 Construction Activity Forecasts</h3>

          <h4>St George/Canterbury-Bankstown Region (2025-2030)</h4>

          <div class="callout callout-info">
            <h4>Major Developments Identified</h4>
            <ul>
              <li>Western Sydney International Airport precinct (indirect impact on region)</li>
              <li>Numerous residential developments across suburbs</li>
              <li>Renovation activity strong in established suburbs</li>
              <li>Commercial redevelopment around transport hubs</li>
            </ul>
          </div>

          <h4>NSW-Wide Construction Outlook</h4>
          <ul>
            <li><strong>Residential Building Recovery:</strong> 1% growth 2024-25, accelerating to 3% in 2025-26</li>
            <li><strong>Non-Residential:</strong> Contraction in 2024-25 (-5%), recovery 2025-26</li>
            <li><strong>Infrastructure:</strong> Strong pipeline ($17.1B federal, $19.3B/year NSW)</li>
            <li><strong>Building Cost Escalation:</strong> 4-5% Sydney (2025), increasing to 4.75-5% (2026-2028)</li>
          </ul>

          <h4>Regional Specific Factors</h4>
          <ul>
            <li><strong>M5 Motorway Accessibility:</strong> Critical for construction logistics, material delivery</li>
            <li><strong>Established Suburbs:</strong> High renovation activity (older housing stock)</li>
            <li><strong>Transport Infrastructure:</strong> Cross River Rail, Sydney Metro West (broader Sydney)</li>
            <li><strong>Population Growth:</strong> Ongoing pressure for housing, commercial space</li>
          </ul>
        </div>

        <div class="section">
          <h3>4.3 Logistical Considerations</h3>

          <h4>Delivery Catchment Analysis (from Hurstville/Padstow base)</h4>

          <div class="callout callout-success">
            <h4>20km Radius Coverage</h4>
            <ul>
              <li><strong>North:</strong> Sydney CBD, Eastern Suburbs, Inner West</li>
              <li><strong>South:</strong> Sutherland Shire, Southern Sydney</li>
              <li><strong>East:</strong> Botany, Mascot, Airport precinct</li>
              <li><strong>West:</strong> Bankstown, Liverpool, Fairfield</li>
              <li><strong>Total Coverage:</strong> ~2.5-3 million population, ~25,000+ construction businesses</li>
            </ul>
          </div>

          <h4>Major Construction Zones Within Range</h4>
          <ol>
            <li><strong>Inner West:</strong> Ongoing apartment development, renovations</li>
            <li><strong>Eastern Suburbs:</strong> High-value renovations, premium construction</li>
            <li><strong>Sutherland Shire:</strong> Residential construction, renovations</li>
            <li><strong>Bankstown-Liverpool Corridor:</strong> Mixed residential/commercial</li>
            <li><strong>Airport Precinct:</strong> Commercial, logistics facilities</li>
          </ol>

          <h4>Transport Infrastructure</h4>
          <ul>
            <li><strong>M5 Motorway:</strong> 5-10 minutes from Padstow, critical for rapid delivery</li>
            <li><strong>Princes Highway:</strong> Direct north-south arterial through Hurstville</li>
            <li><strong>Sydney Airport:</strong> 15-20 minutes, potential for freight if needed</li>
            <li><strong>Port Botany:</strong> 20-25 minutes, import/export potential if scaling</li>
          </ul>

          <h4>Loading/Unloading Facilities</h4>
          <ul>
            <li><strong>Industrial zoning in Padstow:</strong> Suitable for receiving bulk materials</li>
            <li><strong>Forklift access:</strong> Essential for handling EPS blocks</li>
            <li><strong>Covered storage:</strong> Required for inventory protection</li>
            <li><strong>Truck access:</strong> B-double access on major routes for material receiving</li>
          </ul>
        </div>

        <div class="section">
          <h3>4.4 Zoning & Regulatory Compliance</h3>

          <h4>Industrial Zoning</h4>
          <ul>
            <li><strong>Padstow:</strong> Predominantly industrial zoning, suitable for manufacturing/fabrication</li>
            <li><strong>Permitted Uses:</strong> Foam cutting, light industrial, warehousing</li>
            <li><strong>No Special Permits:</strong> Foam cutting not requiring DA beyond standard industrial use</li>
          </ul>

          <h4>Environmental Compliance (NSW EPA)</h4>

          <div class="callout callout-success">
            <h4>EPS Regulatory Status</h4>
            <ul>
              <li>✅ <strong>CONSTRUCTION USE: PERMITTED</strong> - No bans on EPS for building, insulation, construction</li>
              <li>❌ <strong>Food Service Ban:</strong> EPS takeaway containers, cups, plates BANNED in NSW (not applicable to this business)</li>
              <li>❌ <strong>Consumer Packaging:</strong> Phasing out loose fill, molded packaging (not applicable)</li>
              <li>✅ <strong>Industrial/Commercial:</strong> Full permission for construction, packaging, industrial uses</li>
            </ul>
          </div>

          <h4>Waste Management Requirements</h4>
          <ul>
            <li><strong>EPS Recycling Strongly Encouraged:</strong> $2,500/tonne landfill cost makes recycling economically essential</li>
            <li><strong>Recycling Options:</strong> Foamex, Ausblox, other EPSA members accept EPS scrap</li>
            <li><strong>On-Site Waste:</strong> Minimize scrap through optimized cutting patterns</li>
            <li><strong>Granulation:</strong> Some recyclers use granulation machines for scrap foam</li>
          </ul>

          <h4>Air Quality</h4>
          <ul>
            <li><strong>Hot Wire Cutting:</strong> Minimal emissions (clean cutting process)</li>
            <li><strong>Ventilation:</strong> Standard industrial ventilation adequate</li>
            <li><strong>No Dust:</strong> Hot wire cutting produces no dust (unlike mechanical cutting)</li>
          </ul>

          <h4>Workplace Health & Safety</h4>
          <ul>
            <li><strong>Machine Guarding:</strong> CNC equipment must have safety interlocks</li>
            <li><strong>Electrical Safety:</strong> Qualified electrician for installation/maintenance</li>
            <li><strong>Manual Handling:</strong> Forklifts, safe lifting practices for large blocks</li>
            <li><strong>PPE:</strong> Standard industrial (gloves, safety footwear, eye protection for setup)</li>
          </ul>

          <h4>Insurance & Liability</h4>
          <ul>
            <li><strong>Public Liability:</strong> $3-5 million minimum (typically $3,500-$5,000/year)</li>
            <li><strong>Product Liability:</strong> $2-3 million coverage ($2,000-$3,000/year)</li>
            <li><strong>Workers Compensation:</strong> If employing staff</li>
            <li><strong>Business/Equipment:</strong> Property insurance for equipment, inventory</li>
          </ul>
        </div>

        <div class="section">
          <h3>4.5 Accessibility & Parking</h3>

          <h4>Customer Access</h4>
          <ul>
            <li><strong>B2B Model:</strong> Most customers won't visit (delivery-based)</li>
            <li><strong>Trade Counter:</strong> Optional for walk-in small customers</li>
            <li><strong>Parking:</strong> Industrial zoning typically has ample parking</li>
            <li><strong>Truck Access:</strong> Essential for receiving materials</li>
          </ul>

          <h4>Supplier Access</h4>
          <ul>
            <li><strong>Bulk Deliveries:</strong> Large semi-trailers delivering foam blocks</li>
            <li><strong>Frequency:</strong> Weekly to monthly depending on volumes</li>
            <li><strong>Receiving Hours:</strong> Flexible in industrial zone</li>
          </ul>
        </div>

        <!-- 5. INDUSTRY TRENDS & FUTURE OUTLOOK -->
        <h2 id="trends" class="page-break">5. INDUSTRY TRENDS & FUTURE OUTLOOK</h2>

        <div class="section">
          <h3>5.1 Growth Drivers (2025-2030)</h3>

          <h4>Short-term (2025-2027)</h4>

          <div class="callout callout-info">
            <h4>1. NSW Construction Recovery</h4>
            <ul>
              <li>Residential building approvals up 30.4% (September 2025)</li>
              <li>Total dwellings approved: 17,019 (September 2025), up 12%</li>
              <li>Value of residential building: $10.11 billion, up 7.4%</li>
              <li>Construction unemployment at record low 3.2% (indicating strong activity)</li>
            </ul>
          </div>

          <h4>2. Infrastructure Investment</h4>
          <ul>
            <li>Federal 2025-26 budget: $17.1 billion for transport corridors</li>
            <li>NSW rolling capital program: $19.3 billion annually</li>
            <li>Western Sydney International Airport projects driving demand</li>
          </ul>

          <h4>3. Housing Shortage Addressing</h4>
          <ul>
            <li>Australia needs 240,000 annual approvals to rebalance supply</li>
            <li>Current approvals trending toward target</li>
            <li>Government incentives supporting first-home buyers</li>
          </ul>

          <h4>Medium-term (2027-2030)</h4>

          <h4>1. Brisbane 2032 Olympic Games Impact</h4>
          <ul>
            <li><strong>Total Infrastructure Spend:</strong> $7.1 billion+</li>
            <li><strong>Construction Peak:</strong> 2027-2032</li>
            <li><strong>Cost Escalation:</strong> Brisbane building costs +10% (2027-2032)</li>
            <li><strong>Resource Shift:</strong> Labor and materials flow to QLD, opportunity in NSW as prices stabilize</li>
            <li><strong>Economic Benefit:</strong> $8.1B (QLD), $17.6B (Australia) - multiplier effects</li>
          </ul>

          <div class="callout callout-warning">
            <h4>Interstate Construction Dynamics</h4>
            <ul>
              <li>Sydney/Melbourne: 4.75-5% annual cost escalation (2025-2028)</li>
              <li>Brisbane: 6.5-10% escalation (Olympics-driven)</li>
              <li><strong>Opportunity:</strong> NSW may see relative pricing advantage 2026-2030</li>
              <li><strong>Risk:</strong> Labor shortages as workers move to QLD for premium wages</li>
            </ul>
          </div>

          <h4>2. Energy Efficiency & Insulation Mandates</h4>
          <ul>
            <li><strong>National Construction Code 2025:</strong> Enhanced energy efficiency requirements</li>
            <li><strong>Retrofit Market:</strong> Existing buildings upgrading to meet standards</li>
            <li><strong>EPS Applications:</strong> Thermal insulation, under-floor, wall systems, roof</li>
            <li><strong>Growth Segment:</strong> Commercial building upgrades (government mandates)</li>
          </ul>

          <h4>Thermal Performance Standards</h4>
          <ul>
            <li>R-value requirements increasing</li>
            <li>EPS competitive advantage: Cost-effective thermal performance</li>
            <li>XPS premium segment: Higher performance, higher cost</li>
            <li>Market expansion: Both new construction and retrofits</li>
          </ul>

          <h4>3. Packaging & E-Commerce Growth</h4>
          <ul>
            <li><strong>Online Retail Expansion:</strong> 5-7% annual growth continuing</li>
            <li><strong>Protective Packaging:</strong> EPS remains cost-effective for fragile goods</li>
            <li><strong>Cold Chain Logistics:</strong> Food delivery, pharmaceuticals, temperature-sensitive</li>
            <li><strong>Seafood Market:</strong> Global seafood market $253B (2021) → $336B (2025)</li>
          </ul>

          <h4>Packaging Trends</h4>
          <ul>
            <li>Shift to recyclable: Increasing EPS recycling infrastructure</li>
            <li>Reusable EPS: Commercial packaging in closed-loop systems</li>
            <li>Custom molding: Growing demand for fitted protective packaging</li>
            <li>Medical/Pharmaceutical: Strict standards favor proven EPS solutions</li>
          </ul>

          <h4>4. Prefabrication & Modular Construction</h4>
          <ul>
            <li><strong>Market Growth:</strong> Australian prefab market $10.78B (2025) → $13.71B (2030)</li>
            <li><strong>EPS Applications:</strong> Insulated panels, SIPS (Structural Insulated Panels), ICF (Insulated Concrete Forms)</li>
            <li><strong>Construction Speed:</strong> 25% schedule savings driving adoption</li>
            <li><strong>Pattern Book Homes:</strong> NSW government fast-track approvals, standardized designs</li>
          </ul>

          <div class="callout callout-success">
            <h4>Opportunity for EPS Suppliers</h4>
            <ul>
              <li>Precision cutting for panel manufacturing</li>
              <li>Consistent quality requirements</li>
              <li>Volume orders from manufacturers</li>
              <li>Technical specifications demanding CNC precision</li>
            </ul>
          </div>

          <h4>5. Infrastructure & Civil Engineering</h4>
          <ul>
            <li><strong>Geofoam Applications:</strong> EPS lightweight fill for roads, embankments</li>
            <li><strong>Weight:</strong> 1% of soil weight, <10% of other lightweight fill</li>
            <li><strong>Usage Since 1960s:</strong> Established civil engineering application</li>
            <li><strong>Growth:</strong> Infrastructure spending driving specialized applications</li>
          </ul>

          <h4>6. Sustainability & Circular Economy</h4>
          <ul>
            <li><strong>Recycling Infrastructure:</strong> Growing number of EPS recycling facilities</li>
            <li><strong>EPSA Members:</strong> Committed to recycling, circular economy</li>
            <li><strong>Business Advantage:</strong> On-site scrap recycling reduces costs</li>
            <li><strong>Customer Preference:</strong> Sustainability becoming differentiator</li>
          </ul>

          <h4>Recycling Market</h4>
          <ul>
            <li>Post-consumer recycled content: 35-100% in new products (Versalis example)</li>
            <li>Mechanical recycling: Granulation → new foam products</li>
            <li>Australia Target: Reduce 12,000 tonnes/year landfill</li>
            <li>Economic Driver: $2,500/tonne landfill cost vs. recycling revenue</li>
          </ul>
        </div>

        <div class="section">
          <h3>5.2 Market Challenges & Risk Factors</h3>

          <h4>1. Material Cost Volatility</h4>
          <ul>
            <li><strong>EPS Raw Material:</strong> Linked to petroleum/styrene prices</li>
            <li><strong>Historical Volatility:</strong> 5-8% annual fluctuation typical</li>
            <li><strong>Benzene Dependency:</strong> Styrene feedstock tied to crude oil prices</li>
            <li><strong>Impact:</strong> Margin compression if unable to pass through costs</li>
          </ul>

          <div class="callout callout-info">
            <h4>Mitigation Strategies</h4>
            <ul>
              <li>Flexible pricing: Quarterly adjustments linked to indices</li>
              <li>Supplier relationships: Lock in pricing for 3-6 month periods</li>
              <li>Inventory management: Strategic purchasing during price dips</li>
              <li>Customer contracts: Price adjustment clauses for large accounts</li>
            </ul>
          </div>

          <h4>2. Construction Cost Escalation</h4>
          <ul>
            <li><strong>2025 Forecast:</strong> 4.5-6% across most cities</li>
            <li><strong>2028 Forecast:</strong> 6.4% building, 5.8% infrastructure</li>
            <li><strong>Impact:</strong> Builders' margin pressure → cost-cutting → price sensitivity</li>
          </ul>

          <h4>Construction Industry Dynamics</h4>
          <ul>
            <li>Insolvency rates: 3,595 cases (2024-25), +21% YoY</li>
            <li>Thin margins: Average 8-12% net margin in construction supply</li>
            <li>Payment delays: Cash flow pressure in sector</li>
            <li>Credit risk: Need for strong credit management</li>
          </ul>

          <h4>3. Labor Shortages</h4>
          <ul>
            <li><strong>Construction Sector Need:</strong> 90,000 extra workers to meet housing targets</li>
            <li><strong>Current Situation:</strong> 3.2% construction unemployment (record low)</li>
            <li><strong>Wage Pressures:</strong> Competition for skilled workers</li>
            <li><strong>Brisbane Draw:</strong> Olympics pulling workers to QLD (2027-2032)</li>
          </ul>

          <h4>Business Impact</h4>
          <ul>
            <li>Difficulty hiring if expanding</li>
            <li>Wage inflation in operations</li>
            <li>Owner-operator model initially to mitigate</li>
            <li>Automation/CNC critical to minimize labor needs</li>
          </ul>

          <h4>4. Regulatory & Environmental Pressures</h4>
          <ul>
            <li><strong>Single-Use Plastic Bans:</strong> Expanding (food service already banned)</li>
            <li><strong>Extended Producer Responsibility:</strong> Potential future packaging regulations</li>
            <li><strong>Carbon Reduction:</strong> Pressure on petroleum-based products</li>
          </ul>

          <div class="callout callout-warning">
            <h4>Risk Assessment</h4>
            <ul>
              <li><strong>Construction/Industrial Use:</strong> Low risk (not targeted by regulations)</li>
              <li><strong>Packaging:</strong> Medium risk (monitoring extended producer schemes)</li>
              <li><strong>Sustainability Expectations:</strong> Growing need to demonstrate recycling</li>
            </ul>
          </div>

          <h4>5. Competition Intensity</h4>
          <ul>
            <li><strong>Established Players:</strong> National companies with economies of scale</li>
            <li><strong>Market Share:</strong> Top 4-5 players control ~70-75% of market</li>
            <li><strong>Price Competition:</strong> Large players can undercut on volume orders</li>
            <li><strong>Customer Loyalty:</strong> Existing relationships difficult to disrupt</li>
          </ul>

          <h4>Competitive Response</h4>
          <ul>
            <li>Service differentiation: Speed, flexibility, small orders</li>
            <li>Niche targeting: Specialty applications, custom work</li>
            <li>Relationship building: Personal service, technical consultation</li>
            <li>Local advantage: Proximity, responsiveness</li>
          </ul>

          <h4>6. Economic Downturn Impact</h4>
          <ul>
            <li><strong>Construction Cyclicality:</strong> Highly sensitive to economic conditions</li>
            <li><strong>Interest Rates:</strong> Impact on residential construction</li>
            <li><strong>Commercial Sentiment:</strong> Business investment fluctuations</li>
            <li><strong>Consumer Confidence:</strong> Renovation spending varies</li>
          </ul>

          <h4>Historical Patterns</h4>
          <ul>
            <li>GFC Impact: Construction fell ~20-25%</li>
            <li>COVID-19: Initial drop, then stimulus surge</li>
            <li>Recovery Time: Typically 12-24 months</li>
            <li>Diversification: Multiple sectors reduce single-sector risk</li>
          </ul>

          <h4>7. Technology Disruption</h4>
          <ul>
            <li><strong>Alternative Materials:</strong> Bio-based foams, mushroom packaging</li>
            <li><strong>Spray Foam:</strong> Different application method competing for insulation</li>
            <li><strong>Advanced Insulation:</strong> Aerogel, vacuum panels (high cost, niche)</li>
          </ul>

          <h4>Assessment</h4>
          <ul>
            <li>EPS competitive position: Cost-effectiveness, proven performance</li>
            <li>Timeline: Alternative materials 5-10+ years to significant market share</li>
            <li>Niche applications: Alternatives may win specific segments</li>
            <li>Volume applications: EPS likely to remain dominant in construction</li>
          </ul>
        </div>

        <div class="section">
          <h3>5.3 Five-Year Market Outlook (2025-2030)</h3>

          <h4>Base Case Scenario (Most Likely)</h4>

          <h4>2025-2026: Recovery & Stabilization</h4>
          <ul>
            <li>NSW construction approvals continue growth (15-25%)</li>
            <li>Interest rate cuts stimulate residential activity</li>
            <li>Commercial construction remains subdued</li>
            <li><strong>EPS demand growth: 4-6%</strong></li>
          </ul>

          <h4>2027-2028: Acceleration Phase</h4>
          <ul>
            <li>Brisbane Olympics construction peaks</li>
            <li>NSW infrastructure spending sustained</li>
            <li>Residential construction at 180-200k units/year</li>
            <li><strong>EPS demand growth: 6-8%</strong></li>
          </ul>

          <h4>2029-2030: Mature Growth</h4>
          <ul>
            <li>Post-Olympics normalization</li>
            <li>Steady infrastructure pipeline</li>
            <li>Retrofit/renovation market stronger</li>
            <li><strong>EPS demand growth: 3-5%</strong></li>
          </ul>

          <div class="callout callout-success">
            <h4>Market Size Estimates (Sydney EPS Market)</h4>
            <ul>
              <li><strong>2025:</strong> $65-90 million</li>
              <li><strong>2027:</strong> $75-105 million</li>
              <li><strong>2030:</strong> $85-120 million</li>
            </ul>
          </div>

          <h4>Bull Case Scenario (Optimistic)</h4>

          <h4>Assumptions</h4>
          <ul>
            <li>Strong economic growth, low interest rates</li>
            <li>Government housing initiatives effective</li>
            <li>Major infrastructure projects proceed</li>
            <li>Technology adoption (prefab, modular) accelerates</li>
          </ul>

          <h4>Outcomes</h4>
          <ul>
            <li><strong>EPS demand growth:</strong> 8-12% annually</li>
            <li><strong>2030 Sydney market:</strong> $120-150 million</li>
            <li><strong>New business opportunity window:</strong> Wider margins, easier customer acquisition</li>
          </ul>

          <h4>Bear Case Scenario (Pessimistic)</h4>

          <h4>Assumptions</h4>
          <ul>
            <li>Economic downturn, recession</li>
            <li>Interest rates remain elevated</li>
            <li>Construction activity contracts</li>
            <li>Material cost inflation without demand</li>
          </ul>

          <h4>Outcomes</h4>
          <ul>
            <li><strong>EPS demand growth:</strong> 0-2% (flat to slight decline possible)</li>
            <li><strong>2030 Sydney market:</strong> $65-85 million</li>
            <li><strong>New business challenge:</strong> Fierce price competition, market share battles</li>
          </ul>
        </div>

        <!-- 6. CUSTOMER ACQUISITION & MARKETING -->
        <h2 id="marketing" class="page-break">6. CUSTOMER ACQUISITION & MARKETING</h2>

        <div class="section">
          <h3>6.1 Customer Discovery Channels</h3>

          <h4>How Customers Currently Find Foam Cutting Services</h4>

          <h4>1. Online Search (35-40% of new customers)</h4>
          <ul>
            <li><strong>Google:</strong> "EPS foam cutting Sydney", "foam supplier near me", "polystyrene cutting Hurstville"</li>
            <li><strong>Importance:</strong> First page ranking critical</li>
            <li><strong>Competition:</strong> Major players investing in SEO</li>
            <li><strong>Local SEO:</strong> Google Business Profile essential</li>
          </ul>

          <h4>2. Trade Referrals (25-30%)</h4>
          <ul>
            <li>Builder to builder recommendations</li>
            <li>Industry word-of-mouth</li>
            <li>Trades networking at supplier yards</li>
            <li><strong>Value:</strong> High-quality leads, pre-sold on service</li>
          </ul>

          <h4>3. Repeat/Existing Customers (20-25% for established businesses)</h4>
          <ul>
            <li>Loyalty through service quality</li>
            <li>Project-based repeat business</li>
            <li>Account management critical</li>
            <li><strong>Value:</strong> Lowest acquisition cost, predictable revenue</li>
          </ul>

          <h4>4. Industry Directories & Associations (10-15%)</h4>
          <ul>
            <li>HIA (Housing Industry Association) directories</li>
            <li>Master Builders Association</li>
            <li>Supplier directories</li>
            <li>Trade publications</li>
          </ul>

          <h4>5. Direct Sales/Business Development (5-10%)</h4>
          <ul>
            <li>Cold calling construction companies</li>
            <li>Site visits to active projects</li>
            <li>Trade shows and industry events</li>
            <li>Networking at business associations</li>
          </ul>
        </div>

        <div class="section">
          <h3>6.2 Marketing Strategy & Budget</h3>

          <div class="callout callout-info">
            <h4>Year 1 Marketing Budget: $12,000-$18,000 ($1,000-$1,500/month)</h4>
          </div>

          <h4>Digital Marketing (40% of budget - $4,800-$7,200)</h4>

          <h4>Google Business Profile (Free)</h4>
          <ul>
            <li>Optimization for local searches</li>
            <li>Customer reviews (actively request)</li>
            <li>Photos of products, facility, custom work</li>
            <li>Regular posts about capabilities</li>
          </ul>

          <h4>Website ($2,000 setup + $600/year hosting)</h4>
          <ul>
            <li>Professional site with online quoting</li>
            <li>Product catalog with specifications</li>
            <li>Customer testimonials</li>
            <li>Educational content (EPS applications, benefits)</li>
            <li>Contact forms, phone click-to-call</li>
            <li>Mobile-optimized essential</li>
          </ul>

          <h4>Google Ads ($200-$400/month = $2,400-$4,800/year)</h4>
          <ul>
            <li>Local service ads: "EPS foam cutting Hurstville"</li>
            <li>Targeted keywords: Construction-focused</li>
            <li>Geographic targeting: 20km radius</li>
            <li>Competitor conquesting: Bid on competitor names</li>
          </ul>

          <h4>SEO Investment ($800-$1,200 initial + ongoing content)</h4>
          <ul>
            <li>On-page optimization</li>
            <li>Local citation building</li>
            <li>Content creation: Blog posts on applications</li>
            <li>Backlink development</li>
          </ul>

          <h4>Traditional Marketing (30% of budget - $3,600-$5,400)</h4>

          <h4>Vehicle Signage ($1,500-$2,500 one-time)</h4>
          <ul>
            <li>Professional vinyl wrap or magnetic signs</li>
            <li>Mobile billboard effect</li>
            <li>Include: Phone, website, "Same Day Service Available"</li>
          </ul>

          <h4>Trade Publications ($1,200-$1,800/year)</h4>
          <ul>
            <li>Building Connection magazine</li>
            <li>HIA member magazine</li>
            <li>Local Chamber of Commerce publications</li>
          </ul>

          <h4>Direct Mail ($900-$1,200)</h4>
          <ul>
            <li>Targeted postcards to construction companies</li>
            <li>New business announcements</li>
            <li>Quarterly capability updates</li>
          </ul>

          <h4>Networking & Relationships (20% of budget - $2,400-$3,600)</h4>

          <h4>Industry Association Memberships</h4>
          <ul>
            <li>HIA Membership: $600-$1,000/year</li>
            <li>Master Builders: $800-$1,200/year</li>
            <li>Local Chamber of Commerce: $300-$500/year</li>
            <li>EPSA (Expanded Polystyrene Australia): ~$500/year</li>
          </ul>

          <h4>Networking Events</h4>
          <ul>
            <li>Trade breakfasts, after-hours events</li>
            <li>Relationship building with builders</li>
            <li>Supplier partnerships</li>
          </ul>

          <h4>Promotional Materials (10% of budget - $1,200-$1,800)</h4>
          <ul>
            <li>Business cards: Professional, heavy stock</li>
            <li>Flyers/Brochures: Product capabilities, applications</li>
            <li>Sample pieces: Small foam cuts demonstrating precision</li>
            <li>Branded merchandise: Limited (shirts, caps for trade)</li>
          </ul>
        </div>

        <div class="section">
          <h3>6.3 Sales Strategy</h3>

          <h4>Customer Segmentation & Approach</h4>

          <h4>Tier 1: Large Construction Companies (>$5M annual revenue)</h4>
          <ul>
            <li><strong>Approach:</strong> Formal tender process, account management</li>
            <li><strong>Timeline:</strong> 3-6 months to first order</li>
            <li><strong>Value:</strong> Large orders ($2,000-$10,000+), but price-sensitive</li>
            <li><strong>Strategy:</strong> Competitive pricing, reliable delivery, quality consistency</li>
          </ul>

          <h4>Tier 2: Medium Builders & Contractors ($500k-$5M)</h4>
          <ul>
            <li><strong>Approach:</strong> Direct sales calls, samples, relationship building</li>
            <li><strong>Timeline:</strong> 1-3 months to first order</li>
            <li><strong>Value:</strong> Regular orders ($500-$2,000), moderate loyalty</li>
            <li><strong>Strategy:</strong> Responsive service, flexibility, technical support</li>
          </ul>

          <h4>Tier 3: Small Builders & Renovators (<$500k)</h4>
          <ul>
            <li><strong>Approach:</strong> Easy ordering, website, phone</li>
            <li><strong>Timeline:</strong> Immediate (project-driven)</li>
            <li><strong>Value:</strong> Smaller orders ($200-$800), high volume potential</li>
            <li><strong>Strategy:</strong> No minimums, fast service, competitive pricing</li>
          </ul>

          <h4>Tier 4: Specialty Customers (Events, Signage, Marine)</h4>
          <ul>
            <li><strong>Approach:</strong> Technical consultation, custom solutions</li>
            <li><strong>Timeline:</strong> Project-based, variable</li>
            <li><strong>Value:</strong> Premium pricing acceptable, unique requirements</li>
            <li><strong>Strategy:</strong> Technical expertise, creative problem-solving</li>
          </ul>

          <h4>Sales Process</h4>

          <h4>Phase 1: Awareness (Months 1-3)</h4>
          <ul>
            <li>Launch Google Business Profile</li>
            <li>Website live with online quote system</li>
            <li>Initial Google Ads campaign</li>
            <li>Join HIA, Master Builders</li>
            <li>Networking at 2-3 events</li>
          </ul>

          <h4>Phase 2: Outreach (Months 4-6)</h4>
          <ul>
            <li>Direct calling to 50-75 construction companies</li>
            <li>Site visits to active construction projects</li>
            <li>Partnerships with 2-3 complementary trades (plumbers, electricians)</li>
            <li>Customer testimonials from early customers</li>
          </ul>

          <h4>Phase 3: Scaling (Months 7-12)</h4>
          <ul>
            <li>Referral program launch (discount for referrals)</li>
            <li>Expand Google Ads based on ROI</li>
            <li>Content marketing (case studies, applications)</li>
            <li>Email marketing to prospects and customers</li>
          </ul>

          <div class="callout callout-success">
            <h4>Conversion Tactics</h4>
            <ul>
              <li><strong>First Order Discount:</strong> 15% off first order to trial service</li>
              <li><strong>Small Sample Orders:</strong> Encourage testing with no-minimum policy</li>
              <li><strong>Fast Quote Turnaround:</strong> <2 hours response time</li>
              <li><strong>Technical Consultation:</strong> Free design assistance (builds trust)</li>
              <li><strong>Delivery Guarantee:</strong> On-time or discount/free delivery</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h3>6.4 Customer Retention Factors</h3>

          <h4>Critical Retention Drivers (Industry Research)</h4>

          <h4>1. Delivery Reliability (Importance: 9/10)</h4>
          <ul>
            <li>Construction timelines are strict</li>
            <li>Late delivery = project delays = lost customer</li>
            <li><strong>Strategy:</strong> Under-promise, over-deliver on timing</li>
            <li><strong>System:</strong> Real-time delivery tracking, proactive communication</li>
          </ul>

          <h4>2. Product Quality & Consistency (Importance: 9/10)</h4>
          <ul>
            <li>Cutting precision critical for applications</li>
            <li>Material quality must be consistent</li>
            <li><strong>Strategy:</strong> Quality control checks, certified materials</li>
            <li><strong>System:</strong> Inspection process, dimension verification</li>
          </ul>

          <h4>3. Pricing Competitiveness (Importance: 8/10)</h4>
          <ul>
            <li>Price sensitivity varies by customer tier</li>
            <li>Large orders demand competitive pricing</li>
            <li><strong>Strategy:</strong> Volume discounts, contract pricing for regulars</li>
            <li><strong>System:</strong> Clear pricing structure, no surprises</li>
          </ul>

          <h4>4. Responsive Customer Service (Importance: 8/10)</h4>
          <ul>
            <li>Builders need quick answers</li>
            <li>Problem resolution speed critical</li>
            <li><strong>Strategy:</strong> Direct phone line, owner involvement initially</li>
            <li><strong>System:</strong> Response time targets (calls <2 hours, quotes <4 hours)</li>
          </ul>

          <h4>5. Flexibility & Problem-Solving (Importance: 7/10)</h4>
          <ul>
            <li>Custom requirements common</li>
            <li>Last-minute changes happen</li>
            <li><strong>Strategy:</strong> "Can-do" attitude, creative solutions</li>
            <li><strong>System:</strong> Flexible scheduling, rush service available</li>
          </ul>

          <h4>6. Technical Expertise (Importance: 7/10)</h4>
          <ul>
            <li>Many customers need guidance</li>
            <li>Material selection, optimal thickness</li>
            <li><strong>Strategy:</strong> Consultative approach, value-add advice</li>
            <li><strong>System:</strong> Technical resources, application guides</li>
          </ul>

          <h4>Retention Programs</h4>

          <h4>Account Management</h4>
          <ul>
            <li>Dedicated contact for regular customers (>$10k annual)</li>
            <li>Quarterly business reviews with top 10 accounts</li>
            <li>Proactive communication about new capabilities</li>
          </ul>

          <h4>Loyalty Incentives</h4>
          <ul>
            <li>Volume rebates: 5% discount at $25k annual, 10% at $50k</li>
            <li>Priority scheduling for regular customers</li>
            <li>Exclusive access to new products/services</li>
          </ul>

          <h4>Communication Cadence</h4>
          <ul>
            <li>Monthly newsletter: Tips, new applications, industry news</li>
            <li>Quarterly capability updates</li>
            <li>Annual review: Usage summary, cost analysis, recommendations</li>
          </ul>

          <h4>Customer Feedback Loop</h4>
          <ul>
            <li>Post-delivery surveys (email, simple 1-5 rating)</li>
            <li>Quarterly satisfaction calls to top accounts</li>
            <li>Annual face-to-face meetings with key customers</li>
          </ul>

          <div class="callout callout-info">
            <h4>Expected Retention Metrics</h4>
            <ul>
              <li><strong>Year 1:</strong> 40-50% customer retention (baseline, learning phase)</li>
              <li><strong>Year 2:</strong> 60-70% retention (systems refined, relationships built)</li>
              <li><strong>Year 3+:</strong> 70-80% retention (mature customer base, strong reputation)</li>
            </ul>
          </div>
        </div>

        <!-- 7. REGULATORY & COMPLIANCE REQUIREMENTS -->
        <h2 id="regulatory" class="page-break">7. REGULATORY & COMPLIANCE REQUIREMENTS</h2>

        <div class="section">
          <h3>7.1 Business Licensing (NSW)</h3>

          <h4>Essential Registrations</h4>

          <h4>Australian Business Number (ABN)</h4>
          <ul>
            <li>Application: Australian Business Register (free)</li>
            <li>Timeline: Immediate to 24 hours</li>
            <li>Required for: Tax, GST, trading</li>
          </ul>

          <h4>Business Name Registration (if not trading as personal name)</h4>
          <ul>
            <li>Register with ASIC</li>
            <li>Cost: $37 for 1 year, $87 for 3 years</li>
            <li>Renewal required</li>
          </ul>

          <h4>GST Registration</h4>
          <ul>
            <li>Required if turnover >$75,000 (likely from Month 6-9)</li>
            <li>Register via ATO</li>
            <li>Quarterly or monthly BAS lodgment</li>
            <li>Critical for B2B sales (construction companies claim input credits)</li>
          </ul>

          <h4>Workers Compensation Insurance</h4>
          <ul>
            <li>Required if employing staff (including owner in some cases)</li>
            <li>NSW: icare or private insurer</li>
            <li>Premium based on wages, industry classification</li>
            <li>Cost: ~2-3% of wages typically</li>
          </ul>

          <h4>Council Development Approval/Occupation Certificate</h4>
          <ul>
            <li>Check with Canterbury-Bankstown Council (Padstow) or Georges River (Hurstville)</li>
            <li>Industrial zoning: Usually permissible for foam cutting</li>
            <li>May need: Change of use approval if space previously residential/retail</li>
            <li>Timeline: 4-8 weeks typically</li>
            <li>Cost: $500-$2,000 depending on scope</li>
          </ul>
        </div>

        <div class="section">
          <h3>7.2 Environmental Regulations (NSW EPA)</h3>

          <h4>EPS Manufacturing & Cutting Operations</h4>

          <div class="callout callout-success">
            <h4>Current Regulatory Status (2025)</h4>
            <ul>
              <li>✅ <strong>PERMITTED ACTIVITY:</strong> Foam cutting for construction/industrial is fully permitted</li>
              <li>No special EPA licenses required for cutting operations</li>
              <li>Standard industrial environmental management applies</li>
            </ul>
          </div>

          <h4>Banned EPS Products (NOT applicable to this business)</h4>
          <ul>
            <li>Single-use EPS food service items (cups, plates, clamshells)</li>
            <li>EPS loose-fill packaging (consumer packaging only)</li>
            <li>EPS food/beverage containers (takeaway/retail only)</li>
            <li>This business serves industrial/commercial markets = Not affected</li>
          </ul>

          <h4>Waste Management Obligations</h4>

          <h4>EPS Waste Disposal Requirements</h4>
          <ul>
            <li>Cannot use kerbside recycling bins (contamination risk)</li>
            <li>Options:
              <ol>
                <li><strong>EPS Recycling Programs:</strong> Foamex, Ausblox, other EPSA members</li>
                <li><strong>Commercial Recycling Services:</strong> Hunter Pods (Thornton), others</li>
                <li><strong>Landfill (last resort):</strong> $2,500/tonne cost makes uneconomical</li>
              </ol>
            </li>
          </ul>

          <div class="callout callout-info">
            <h4>Best Practice</h4>
            <ul>
              <li>Implement waste minimization through optimized cutting patterns</li>
              <li>Establish recycling partnership with EPSA member</li>
              <li>Separate clean scrap (high recycling value) from contaminated</li>
              <li>Track waste metrics for continuous improvement</li>
            </ul>
          </div>

          <h4>On-Site Environmental Management</h4>
          <ul>
            <li><strong>Dust control:</strong> Hot wire cutting produces no dust (advantage over mechanical)</li>
            <li><strong>Noise:</strong> CNC equipment relatively quiet, no special measures needed</li>
            <li><strong>Stormwater:</strong> Prevent foam fragments entering drains</li>
            <li><strong>Storage:</strong> Indoor storage to prevent wind dispersal</li>
          </ul>
        </div>

        <div class="section">
          <h3>7.3 Product Standards & Quality</h3>

          <h4>Australian Standards for EPS Products</h4>

          <h4>AS 1366.3 - Rigid cellular plastics (EPS)</h4>
          <ul>
            <li>Specifies requirements for EPS used in construction</li>
            <li>Covers: Density, compressive strength, thermal properties</li>
            <li><strong>Supplier Compliance:</strong> Purchase from manufacturers producing to AS 1366.3</li>
            <li><strong>Quality Assurance:</strong> Request certification from suppliers</li>
          </ul>

          <h4>AS/NZS 1530.3 - Fire tests</h4>
          <ul>
            <li>EPS flammability characteristics</li>
            <li>Building Code compliance for specific applications</li>
            <li><strong>Customer Education:</strong> Proper use of EPS in fire-rated assemblies</li>
          </ul>

          <h4>Building Code of Australia (BCA) / National Construction Code (NCC)</h4>
          <ul>
            <li>EPS permitted material when used appropriately</li>
            <li>Fire rating requirements for wall/ceiling assemblies</li>
            <li>Insulation R-value requirements</li>
            <li><strong>Customer Guidance:</strong> Ensure recommendations comply with BCA</li>
          </ul>

          <h4>Quality Control Measures</h4>

          <h4>Incoming Material Inspection</h4>
          <ul>
            <li><strong>Verify:</strong> Density, block dimensions, surface quality</li>
            <li><strong>Reject:</strong> Damaged, non-conforming material</li>
            <li><strong>Documentation:</strong> Supplier certificates, batch numbers</li>
          </ul>

          <h4>Cutting Quality Assurance</h4>
          <ul>
            <li><strong>Dimensional checks:</strong> Random sampling of cuts</li>
            <li><strong>Tolerance:</strong> ±0.3-0.5mm (CNC capability)</li>
            <li><strong>Surface finish:</strong> Smooth, clean cuts without melting/distortion</li>
          </ul>

          <h4>Customer Specification Compliance</h4>
          <ul>
            <li>Drawing verification before cutting</li>
            <li>Hold points for customer approval (complex jobs)</li>
            <li>Final inspection before delivery</li>
          </ul>
        </div>

        <div class="section">
          <h3>7.4 Workplace Health & Safety</h3>

          <h4>SafeWork NSW Compliance</h4>

          <h4>Key Hazards & Controls</h4>

          <h4>1. Electrical Safety (Hot Wire Cutting)</h4>
          <ul>
            <li><strong>Hazard:</strong> Electrical shock from cutting equipment</li>
            <li><strong>Controls:</strong>
              <ul>
                <li>Licensed electrician for installation</li>
                <li>Regular testing and tagging</li>
                <li>Lockout/tagout procedures for maintenance</li>
                <li>Safety interlocks on equipment</li>
              </ul>
            </li>
          </ul>

          <h4>2. Manual Handling</h4>
          <ul>
            <li><strong>Hazard:</strong> Lifting large foam blocks (although light, can be bulky)</li>
            <li><strong>Controls:</strong>
              <ul>
                <li>Forklift for blocks >25kg or awkward size</li>
                <li>Team lifts for large pieces</li>
                <li>Trolleys and handling aids</li>
                <li>Training in safe lifting techniques</li>
              </ul>
            </li>
          </ul>

          <h4>3. Machine Safety</h4>
          <ul>
            <li><strong>Hazard:</strong> Moving parts, hot wires</li>
            <li><strong>Controls:</strong>
              <ul>
                <li>Machine guarding</li>
                <li>Emergency stop buttons</li>
                <li>Operator training</li>
                <li>Maintenance lockout procedures</li>
              </ul>
            </li>
          </ul>

          <h4>4. Burns (Hot Wire)</h4>
          <ul>
            <li><strong>Hazard:</strong> Contact with cutting wire (70V heated)</li>
            <li><strong>Controls:</strong>
              <ul>
                <li>Wire guards</li>
                <li>Operator training</li>
                <li>Cool-down procedures</li>
                <li>First aid kit accessible</li>
              </ul>
            </li>
          </ul>

          <h4>5. Slips, Trips, Falls</h4>
          <ul>
            <li><strong>Hazard:</strong> Foam offcuts on floor</li>
            <li><strong>Controls:</strong>
              <ul>
                <li>Housekeeping procedures</li>
                <li>Designated scrap areas</li>
                <li>Non-slip flooring</li>
                <li>Clear walkways marked</li>
              </ul>
            </li>
          </ul>

          <h4>Required Documentation</h4>
          <ul>
            <li>Safe Work Method Statements (SWMS) for key tasks</li>
            <li>Hazard identification and risk assessment</li>
            <li>Incident reporting procedures</li>
            <li>Emergency evacuation plan</li>
            <li>First aid provisions</li>
          </ul>

          <h4>PPE Requirements</h4>
          <ul>
            <li><strong>Safety footwear:</strong> Always required</li>
            <li><strong>Gloves:</strong> For handling materials, equipment</li>
            <li><strong>Eye protection:</strong> During machine setup, maintenance</li>
            <li><strong>Hearing protection:</strong> If noise levels warrant (unlikely with CNC)</li>
          </ul>
        </div>

        <div class="section">
          <h3>7.5 Insurance Requirements</h3>

          <h4>Essential Coverage</h4>

          <h4>Public Liability Insurance</h4>
          <ul>
            <li><strong>Coverage:</strong> $3-5 million minimum (consider $10M for larger contracts)</li>
            <li><strong>Protects:</strong> Third-party injury or property damage</li>
            <li><strong>Example:</strong> Delivered foam causes damage during unloading</li>
            <li><strong>Cost:</strong> $2,000-$5,000/year depending on coverage and turnover</li>
          </ul>

          <h4>Product Liability Insurance</h4>
          <ul>
            <li><strong>Coverage:</strong> $2-5 million</li>
            <li><strong>Protects:</strong> Product defect causing damage/injury</li>
            <li><strong>Example:</strong> Incorrectly cut foam causes structural issue</li>
            <li><strong>Cost:</strong> $2,000-$3,500/year</li>
            <li>Often combined with Public Liability</li>
          </ul>

          <h4>Business/Contents Insurance</h4>
          <ul>
            <li><strong>Coverage:</strong> Equipment, inventory, premises improvements</li>
            <li><strong>Protects:</strong> Fire, theft, damage to business assets</li>
            <li><strong>Value:</strong> $150,000-$250,000 (equipment + inventory)</li>
            <li><strong>Cost:</strong> $1,500-$2,500/year</li>
          </ul>

          <h4>Commercial Vehicle Insurance</h4>
          <ul>
            <li><strong>Coverage:</strong> Delivery vehicle(s)</li>
            <li><strong>Includes:</strong> Comprehensive, third party property, goods in transit</li>
            <li><strong>Cost:</strong> $1,800-$2,500/year per vehicle</li>
          </ul>

          <h4>Business Interruption Insurance (Optional but Recommended)</h4>
          <ul>
            <li><strong>Coverage:</strong> Loss of income if unable to operate</li>
            <li><strong>Scenarios:</strong> Fire, equipment breakdown, supply chain disruption</li>
            <li><strong>Cost:</strong> $1,000-$2,000/year</li>
          </ul>

          <h4>Workers Compensation</h4>
          <ul>
            <li><strong>Required:</strong> If employing staff</li>
            <li><strong>Coverage:</strong> Work-related injury or illness</li>
            <li><strong>Premium:</strong> ~2-3% of wages (varies by classification)</li>
          </ul>

          <h4>Cyber Insurance (Growing Importance)</h4>
          <ul>
            <li><strong>Coverage:</strong> Data breach, cyber attack, business email compromise</li>
            <li><strong>Relevant:</strong> If accepting credit cards, holding customer data</li>
            <li><strong>Cost:</strong> $500-$1,500/year for small business</li>
          </ul>

          <div class="callout callout-warning">
            <h4>Total Annual Insurance Budget: $10,000-$18,000/year</h4>
          </div>
        </div>

        <div class="section">
          <h3>7.6 Tax & Accounting Obligations</h3>

          <h4>Ongoing Compliance</h4>

          <h4>Goods & Services Tax (GST)</h4>
          <ul>
            <li><strong>Registration:</strong> Required at $75k turnover (likely Year 1)</li>
            <li><strong>Rate:</strong> 10% on sales, claim credits on purchases</li>
            <li><strong>Lodgment:</strong> Quarterly BAS (monthly if large)</li>
            <li><strong>Record keeping:</strong> Tax invoices, purchase receipts</li>
          </ul>

          <h4>Income Tax</h4>
          <ul>
            <li><strong>Business Structure:</strong> Sole trader (personal tax rate) or Company (30% flat)</li>
            <li><strong>Pay-As-You-Go (PAYG):</strong> Quarterly installments</li>
            <li><strong>Annual tax return:</strong> Through accountant recommended</li>
          </ul>

          <h4>Payroll Tax (NSW)</h4>
          <ul>
            <li><strong>Threshold:</strong> $1.2 million wages annually</li>
            <li>Unlikely in Years 1-3 unless significant expansion</li>
          </ul>

          <h4>Record Keeping Requirements</h4>
          <ul>
            <li><strong>Retention:</strong> 5 years minimum</li>
            <li><strong>Required:</strong> Invoices, receipts, bank statements, BAS, tax returns</li>
            <li><strong>Systems:</strong> Xero, MYOB, or similar accounting software recommended</li>
          </ul>

          <h4>Recommended Professional Services</h4>
          <ul>
            <li><strong>Accountant/Bookkeeper:</strong> $2,400-$4,800/year</li>
            <li><strong>Business advisor:</strong> Optional, $150-300/hour as needed</li>
            <li><strong>Legal (contract reviews):</strong> $200-400/hour, occasional use</li>
          </ul>
        </div>

        <!-- 8. SUPPLY CHAIN ANALYSIS -->
        <h2 id="supply-chain" class="page-break">8. SUPPLY CHAIN ANALYSIS</h2>

        <div class="section">
          <h3>8.1 EPS Foam Manufacturers & Suppliers (Australia)</h3>

          <h4>Primary Manufacturers</h4>

          <h4>1. Foamex</h4>
          <ul>
            <li><strong>Locations:</strong> 8 manufacturing facilities across Australia (including NSW)</li>
            <li><strong>Capabilities:</strong> In-house manufacturing, custom molding, recycling</li>
            <li><strong>Products:</strong> EPS, XPS, specialty foams</li>
            <li><strong>Strengths:</strong> National coverage, technical capabilities, recycling program</li>
            <li><strong>Lead Times:</strong> Typically 1-2 weeks for standard products</li>
            <li><strong>Minimum Orders:</strong> Volume discounts start at pallet quantities (~300 sheets)</li>
          </ul>

          <h4>2. Ausblox</h4>
          <ul>
            <li><strong>Location:</strong> Sydney head office and manufacturing</li>
            <li><strong>Specialization:</strong> EPS blocks and custom cuts, polyurethane</li>
            <li><strong>Standards:</strong> Compliant with AS 1366.3</li>
            <li><strong>Strengths:</strong> Local Sydney manufacturing, quick turnaround</li>
            <li><strong>Recycling:</strong> On-site scrap recycling capability</li>
            <li><strong>Relationship Potential:</strong> High - direct manufacturer relationship</li>
          </ul>

          <h4>3. BASF SE</h4>
          <ul>
            <li><strong>Type:</strong> Global chemicals manufacturer, styrene supplier</li>
            <li><strong>Role:</strong> Raw material supplier to foam manufacturers</li>
            <li><strong>Relevance:</strong> Indirect supplier, understand pricing influences</li>
          </ul>

          <h4>4. Synthos SA</h4>
          <ul>
            <li><strong>Type:</strong> Global EPS manufacturer</li>
            <li><strong>Australian Presence:</strong> Potential supplier for bulk materials</li>
            <li><strong>Focus:</strong> Recycling technology, sustainable materials</li>
          </ul>

          <h4>5. Regional Manufacturers</h4>
          <ul>
            <li>Multiple smaller manufacturers across NSW</li>
            <li><strong>Opportunity:</strong> Secondary suppliers for backup, price comparison</li>
            <li><strong>Risk:</strong> Quality variability, reliability questions</li>
          </ul>
        </div>

        <div class="section">
          <h3>8.2 Supplier Evaluation Criteria</h3>

          <h4>Critical Factors</h4>

          <h4>1. Quality & Consistency (Weight: 30%)</h4>
          <ul>
            <li>AS 1366.3 certification</li>
            <li>Batch-to-batch consistency</li>
            <li>Dimensional accuracy of blocks</li>
            <li>Surface quality (smooth, no defects)</li>
          </ul>

          <h4>2. Pricing & Terms (Weight: 25%)</h4>
          <ul>
            <li>Competitive base pricing</li>
            <li>Volume discount structure</li>
            <li>Payment terms (30-60 days ideal)</li>
            <li>Price stability/adjustment mechanisms</li>
          </ul>

          <h4>3. Delivery Reliability (Weight: 20%)</h4>
          <ul>
            <li>Lead time consistency</li>
            <li>On-time delivery rate</li>
            <li>Flexibility for rush orders</li>
            <li>Delivery frequency options</li>
          </ul>

          <h4>4. Service & Support (Weight: 15%)</h4>
          <ul>
            <li>Technical support availability</li>
            <li>New product introductions</li>
            <li>Problem resolution responsiveness</li>
            <li>Account management</li>
          </ul>

          <h4>5. Proximity & Logistics (Weight: 10%)</h4>
          <ul>
            <li>Sydney-based preferred</li>
            <li>Freight costs</li>
            <li>Delivery scheduling flexibility</li>
            <li>Minimum order quantities</li>
          </ul>
        </div>

        <div class="section">
          <h3>8.3 Supply Chain Strategy</h3>

          <h4>Dual Sourcing Approach</h4>

          <h4>Primary Supplier (80% of volume)</h4>
          <ul>
            <li><strong>Likely:</strong> Ausblox (Sydney local) or Foamex (national, strong)</li>
            <li><strong>Relationship:</strong> Build strong partnership, regular orders</li>
            <li><strong>Benefits:</strong> Preferred pricing, priority service, payment terms</li>
          </ul>

          <h4>Secondary Supplier (20% of volume)</h4>
          <ul>
            <li>Backup supplier for risk mitigation</li>
            <li>Price comparison leverage</li>
            <li>Specialty products not available from primary</li>
          </ul>

          <h4>Inventory Management</h4>

          <h4>Raw Material Stocking</h4>
          <ul>
            <li><strong>Standard Densities:</strong> 15kg/m³ and 20kg/m³ (80% of demand)</li>
            <li><strong>Block Sizes:</strong> 1250x1050mm, lengths 3-5 meters</li>
            <li><strong>Inventory Level:</strong> 2-3 weeks usage (~$10,000-$15,000 tied capital)</li>
            <li><strong>Reorder Point:</strong> When stock drops to 1-week usage</li>
            <li><strong>Safety Stock:</strong> 3-5 days for most common items</li>
          </ul>

          <div class="callout callout-info">
            <h4>Inventory Turns Target</h4>
            <ul>
              <li><strong>Year 1:</strong> 15-20 turns (18-24 day inventory)</li>
              <li><strong>Year 2-3:</strong> 20-25 turns (14-18 day inventory)</li>
              <li><strong>Storage space:</strong> ~30-50 square meters for typical inventory</li>
            </ul>
          </div>

          <h4>Just-In-Time Considerations</h4>
          <ul>
            <li>Not fully JIT: Some safety stock essential</li>
            <li>Large orders: Direct delivery from supplier possible</li>
            <li>Custom densities: Order specifically for projects</li>
          </ul>
        </div>

        <div class="section">
          <h3>8.4 Supply Chain Risks & Mitigation</h3>

          <h4>Risk 1: Single Supplier Dependency</h4>
          <ul>
            <li><strong>Impact:</strong> Supply disruption if sole supplier has issues</li>
            <li><strong>Probability:</strong> Medium (equipment breakdowns, strikes)</li>
            <li><strong>Mitigation:</strong> Maintain qualified secondary supplier, test quarterly</li>
            <li><strong>Contingency:</strong> 2-week safety stock for critical items</li>
          </ul>

          <h4>Risk 2: Price Volatility (Petroleum-linked)</h4>
          <ul>
            <li><strong>Impact:</strong> Margin compression if costs rise unexpectedly</li>
            <li><strong>Probability:</strong> High (oil price fluctuations)</li>
            <li><strong>Mitigation:</strong>
              <ul>
                <li>Quarterly price reviews with customers</li>
                <li>Forward purchasing during price dips (if capital allows)</li>
                <li>Price escalation clauses in larger contracts</li>
                <li>Diversify supplier base for competition</li>
              </ul>
            </li>
          </ul>

          <h4>Risk 3: Quality Issues</h4>
          <ul>
            <li><strong>Impact:</strong> Customer complaints, rework, reputation damage</li>
            <li><strong>Probability:</strong> Low-Medium</li>
            <li><strong>Mitigation:</strong>
              <ul>
                <li>Incoming material inspection</li>
                <li>Supplier audits/certifications</li>
                <li>Clear quality specifications in purchase orders</li>
                <li>Defect tracking and supplier feedback</li>
              </ul>
            </li>
          </ul>

          <h4>Risk 4: Delivery Delays</h4>
          <ul>
            <li><strong>Impact:</strong> Unable to fulfill customer orders on time</li>
            <li><strong>Probability:</strong> Medium (traffic, supplier capacity)</li>
            <li><strong>Mitigation:</strong>
              <ul>
                <li>Buffer inventory</li>
                <li>Multiple delivery windows per week</li>
                <li>Customer communication (proactive if delays expected)</li>
                <li>Alternative suppliers ready to activate</li>
              </ul>
            </li>
          </ul>

          <h4>Risk 5: Minimum Order Quantities</h4>
          <ul>
            <li><strong>Impact:</strong> Capital tied up in slow-moving inventory</li>
            <li><strong>Probability:</strong> High initially (low volumes)</li>
            <li><strong>Mitigation:</strong>
              <ul>
                <li>Start with distributors (lower MOQs than manufacturers)</li>
                <li>Build volume to access manufacturer direct pricing</li>
                <li>Partner with another buyer (e.g., local builder) for joint orders</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="section">
          <h3>8.5 Payment Terms & Credit</h3>

          <h4>Typical Industry Terms</h4>

          <h4>New Supplier Relationship</h4>
          <ul>
            <li><strong>Initial Orders:</strong> Cash on delivery (COD) or credit card</li>
            <li><strong>Duration:</strong> First 1-3 orders or $10,000-$15,000 total</li>
            <li><strong>Transition:</strong> Request 30-day terms after track record established</li>
          </ul>

          <h4>Established Account</h4>
          <ul>
            <li><strong>Standard Terms:</strong> 30 days net</li>
            <li><strong>Preferred Terms:</strong> 60 days (negotiate after 6-12 months)</li>
            <li><strong>Early Payment Discount:</strong> 2% 10 days, Net 30 (if offered, take it)</li>
          </ul>

          <h4>Credit Application Requirements</h4>
          <ul>
            <li>Business ABN, ACN</li>
            <li>Trade references (other suppliers)</li>
            <li>Financial statements (after Year 1)</li>
            <li>Director's guarantee (common for small businesses)</li>
          </ul>

          <div class="callout callout-warning">
            <h4>Working Capital Implications</h4>
            <ul>
              <li><strong>Accounts Payable:</strong> 30-60 days (supplier terms)</li>
              <li><strong>Accounts Receivable:</strong> 14-30 days (customer payments)</li>
              <li><strong>Inventory:</strong> 14-24 days turnover</li>
              <li><strong>Working Capital Need:</strong> $15,000-$30,000 buffer for cash flow timing</li>
            </ul>
          </div>
        </div>

        <!-- 9. EQUIPMENT & TECHNOLOGY INVESTMENT -->
        <h2 id="equipment-tech" class="page-break">9. EQUIPMENT & TECHNOLOGY INVESTMENT</h2>

        <div class="section">
          <h3>9.1 Cutting Equipment Options</h3>

          <h4>CNC Hot Wire Foam Cutting Machines</h4>

          <h4>Entry-Level Option: 2-Axis Basic System</h4>
          <ul>
            <li><strong>Manufacturer:</strong> Various (Chinese manufacturers, entry brands)</li>
            <li><strong>Capabilities:</strong> 2D contour cutting, basic shapes</li>
            <li><strong>Wire Capacity:</strong> 1-5 wires</li>
            <li><strong>Cutting Area:</strong> 2000-3000mm x 1000-1500mm</li>
            <li><strong>Cost:</strong> $35,000-$65,000 AUD</li>
            <li><strong>Pros:</strong> Lower initial investment, suitable for simple cuts</li>
            <li><strong>Cons:</strong> Limited capabilities, slower production, quality concerns</li>
          </ul>

          <h4>Mid-Range Option: Wintech Horizontal/Compuset</h4>
          <ul>
            <li><strong>Manufacturer:</strong> Wintech Engineering (Australian, established 1985)</li>
            <li><strong>Capabilities:</strong> 2D contour cutting, sheeting, multi-wire automatic</li>
            <li><strong>Wire Capacity:</strong> 20 wires standard (40 wire upgrade available)</li>
            <li><strong>Cutting Area:</strong> Various sizes (compact to large)</li>
            <li><strong>Cost:</strong> $130,000-$180,000 AUD ex-works</li>
            <li><strong>Pros:</strong> Proven technology, Australian-made, local support, reliable</li>
            <li><strong>Cons:</strong> Higher upfront cost, takes factory space</li>
          </ul>

          <h4>Premium Option: 3-5 Axis Multi-Wire Systems</h4>
          <ul>
            <li><strong>Manufacturer:</strong> Oncel CNC, CNC-Multitool, European brands</li>
            <li><strong>Capabilities:</strong> 3D shapes, complex geometries, 30+ wires simultaneously</li>
            <li><strong>Wire Capacity:</strong> Up to 30-40 wires</li>
            <li><strong>Cutting Area:</strong> 4000-5000mm lengths</li>
            <li><strong>Cost:</strong> $180,000-$300,000+ AUD</li>
            <li><strong>Pros:</strong> Maximum capabilities, high production throughput</li>
            <li><strong>Cons:</strong> Highest cost, requires significant space, complex operation</li>
          </ul>
        </div>

        <div class="section">
          <h3>9.2 Recommended Equipment Package (Phase 1)</h3>

          <div class="callout callout-success">
            <h4>Primary Equipment: Wintech Horizontal (Mid-Range)</h4>
            <ul>
              <li><strong>Model:</strong> Compact or standard horizontal setup</li>
              <li><strong>Cost:</strong> $140,000-$160,000 installed</li>
              <li><strong>Rationale:</strong>
                <ul>
                  <li>Australian-made: Local support, 12-month warranty</li>
                  <li>Proven reliability: Industry standard, established technology</li>
                  <li>Automated wire loading: Efficiency for sheeting operations</li>
                  <li>Scalability: Upgrade to 40 wires possible</li>
                  <li>Software: Wintech Profiler included, user-friendly</li>
                  <li>Training: Technician installation and operator training included</li>
                </ul>
              </li>
            </ul>
          </div>

          <h4>Specifications</h4>
          <ul>
            <li><strong>Cutting Frame:</strong> Automated positioning</li>
            <li><strong>Wire Capacity:</strong> 20 wires standard</li>
            <li><strong>Control Cabinet:</strong> Windows-based, touch screen, remote handset</li>
            <li><strong>Software:</strong> Profiler (design/cutting), AutoNEST (optional for optimization)</li>
            <li><strong>Precision:</strong> ±0.3-0.5mm cutting accuracy</li>
            <li><strong>Power:</strong> 3KW transformer, 0-70V adjustable</li>
          </ul>

          <h4>Supporting Equipment</h4>

          <h5>Forklift/Material Handling</h5>
          <ul>
            <li><strong>Type:</strong> Electric or LPG, 1.5-2 tonne capacity</li>
            <li><strong>Cost:</strong> $15,000-$25,000 (used) or $30,000-$45,000 (new)</li>
            <li><strong>Alternative:</strong> Lease $400-$600/month</li>
            <li><strong>Rationale:</strong> Essential for handling large EPS blocks</li>
          </ul>

          <h5>Work Tables & Fixtures</h5>
          <ul>
            <li><strong>Cost:</strong> $2,000-$4,000</li>
            <li><strong>Items:</strong> Assembly tables, cutting templates, fixtures</li>
          </ul>

          <h5>Hand Tools & Equipment</h5>
          <ul>
            <li><strong>Cost:</strong> $1,500-$2,500</li>
            <li><strong>Items:</strong> Manual hot knife cutter (portable), measuring tools, adhesive guns, safety equipment</li>
          </ul>

          <h5>Computer & Software Backup</h5>
          <ul>
            <li><strong>Cost:</strong> $2,000-$3,000</li>
            <li><strong>Rationale:</strong> Backup CAD/CAM computer, design software licenses</li>
          </ul>

          <div class="callout callout-info">
            <h4>Total Phase 1 Equipment Investment</h4>
            <ul>
              <li>Primary CNC Equipment: $140,000-$160,000</li>
              <li>Forklift (used): $15,000-$25,000</li>
              <li>Supporting Equipment: $5,500-$9,500</li>
              <li><strong>Total: $160,500-$194,500</strong></li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h3>9.3 Facility Requirements</h3>

          <h4>Space Needed</h4>

          <h5>Production Area</h5>
          <ul>
            <li><strong>CNC Machine Footprint:</strong> 25-35 square meters (including clearance)</li>
            <li><strong>Material Storage (raw blocks):</strong> 30-50 square meters</li>
            <li><strong>Finished Goods Storage:</strong> 20-30 square meters</li>
            <li><strong>Work Benches/Assembly:</strong> 15-20 square meters</li>
            <li><strong>Total Production:</strong> 90-135 square meters minimum</li>
          </ul>

          <h5>Additional Space</h5>
          <ul>
            <li><strong>Office/Customer Counter:</strong> 10-15 square meters</li>
            <li><strong>Amenities (bathroom, kitchenette):</strong> 10-15 square meters</li>
            <li><strong>Loading/Unloading Zone:</strong> 30-40 square meters (external)</li>
            <li><strong>Total Facility:</strong> 140-205 square meters ideal</li>
          </ul>

          <h4>Facility Specifications</h4>
          <ul>
            <li><strong>Ceiling Height:</strong> 4-5 meters minimum (for forklift, overhead storage)</li>
            <li><strong>Loading Dock:</strong> Roller door 3-4 meters wide minimum</li>
            <li><strong>Power:</strong> 3-phase power essential (CNC equipment)</li>
            <li><strong>Flooring:</strong> Concrete, level, forklift-rated</li>
            <li><strong>Zoning:</strong> Industrial or light industrial</li>
            <li><strong>Access:</strong> B-double access for material deliveries</li>
          </ul>

          <div class="callout callout-success">
            <h4>Hurstville/Padstow Advantage</h4>
            <ul>
              <li>Owner already owns space in the area</li>
              <li>Eliminates rent expense (~$2,500-$3,500/month saved)</li>
              <li>Opportunity cost: ~$30,000-$42,000/year</li>
              <li><strong>Critical:</strong> Verify space meets specifications above</li>
            </ul>
          </div>

          <h4>Facility Improvements Budget</h4>
          <ul>
            <li><strong>Electrical Upgrade (3-phase if needed):</strong> $3,000-$8,000</li>
            <li><strong>Flooring Repairs/Leveling:</strong> $2,000-$5,000</li>
            <li><strong>Lighting (LED high-bay):</strong> $1,500-$3,000</li>
            <li><strong>Ventilation:</strong> $1,000-$2,000</li>
            <li><strong>Security (cameras, alarm):</strong> $2,000-$4,000</li>
            <li><strong>Office Fitout:</strong> $3,000-$5,000</li>
            <li><strong>Total Improvements: $12,500-$27,000</strong></li>
          </ul>
        </div>

        <div class="section">
          <h3>9.4 Technology & Software</h3>

          <h4>Essential Software</h4>

          <h5>CAD/CAM for Cutting</h5>
          <ul>
            <li><strong>Wintech Profiler:</strong> Included with equipment</li>
            <li><strong>Capabilities:</strong> Design, import DXF/DWG, nesting, cutting control</li>
            <li><strong>Backup Software:</strong> AutoCAD or similar for complex design</li>
            <li><strong>Cost:</strong> Included + $500-$1,000 for supplementary tools</li>
          </ul>

          <h5>Business Management</h5>
          <ul>
            <li><strong>Accounting:</strong> Xero or MYOB ($50-$80/month = $600-$960/year)</li>
            <li><strong>CRM/Quoting:</strong> HubSpot (free tier initially) or JobAdder ($100-$200/month)</li>
            <li><strong>Inventory Management:</strong> Built into accounting software or standalone</li>
            <li><strong>Total:</strong> $1,200-$3,000/year</li>
          </ul>

          <h5>Communication & Productivity</h5>
          <ul>
            <li><strong>Email/Office:</strong> Microsoft 365 Business ($22/month = $264/year)</li>
            <li><strong>Project Management:</strong> Trello/Asana (free tier adequate initially)</li>
            <li><strong>Cloud Storage:</strong> Google Drive or Dropbox ($10-20/month = $120-$240/year)</li>
            <li><strong>Total:</strong> $384-$504/year</li>
          </ul>

          <h5>Website & Digital</h5>
          <ul>
            <li><strong>Website Platform:</strong> WordPress or Wix ($200-$400/year hosting)</li>
            <li><strong>E-commerce/Quoting:</strong> Online quote calculator custom development ($2,000-$4,000 one-time)</li>
            <li><strong>Domain/Email:</strong> $50-$100/year</li>
            <li><strong>Total Setup:</strong> $2,250-$4,500 (Year 1), then $250-$500/year ongoing</li>
          </ul>

          <div class="callout callout-info">
            <p><strong>Total Software/Technology Annual:</strong> $2,500-$4,500 (Year 1), then $1,800-$3,000/year ongoing</p>
          </div>
        </div>

        <div class="section">
          <h3>9.5 ROI Analysis</h3>

          <h4>Equipment Investment Timeline</h4>

          <h5>Initial Capital Outlay</h5>
          <ul>
            <li>Equipment & Setup: $160,500-$194,500</li>
            <li>Facility Improvements: $12,500-$27,000</li>
            <li>Initial Inventory: $10,000-$15,000</li>
            <li>Working Capital: $15,000-$20,000</li>
            <li>Technology/Software: $2,500-$4,500</li>
            <li>Marketing Launch: $3,000-$5,000</li>
            <li>Legal/Professional: $2,000-$3,000</li>
            <li>Contingency (10%): $20,500-$26,900</li>
            <li><strong>Total Initial Investment: $226,000-$296,000</strong></li>
          </ul>

          <h4>Payback Period Calculation</h4>

          <h5>Conservative Scenario</h5>
          <ul>
            <li>Annual Revenue (Year 3): $600,000</li>
            <li>Gross Margin: 35% = $210,000</li>
            <li>Operating Expenses (excluding depreciation): $140,000</li>
            <li>EBITDA: $70,000/year</li>
            <li><strong>Payback Period: $250,000 investment / $70,000 EBITDA = 3.6 years</strong></li>
          </ul>

          <h5>Moderate Scenario</h5>
          <ul>
            <li>Annual Revenue (Year 3): $750,000</li>
            <li>Gross Margin: 40% = $300,000</li>
            <li>Operating Expenses: $165,000</li>
            <li>EBITDA: $135,000/year</li>
            <li><strong>Payback Period: $250,000 / $135,000 = 1.9 years</strong></li>
          </ul>

          <h4>Depreciation Benefit</h4>
          <ul>
            <li><strong>Equipment Life:</strong> 10-15 years (CNC machinery)</li>
            <li><strong>Annual Depreciation:</strong> $14,000-$19,500 (tax deductible)</li>
            <li><strong>Tax Benefit (30% company rate):</strong> $4,200-$5,850/year</li>
          </ul>

          <h4>Equipment Utilization Targets</h4>
          <ul>
            <li><strong>Year 1:</strong> 30-40% utilization (6-8 hours/day productive cutting)</li>
            <li><strong>Year 2:</strong> 50-65% utilization (10-13 hours/day)</li>
            <li><strong>Year 3:</strong> 65-80% utilization (13-16 hours/day)</li>
            <li><strong>Maximum:</strong> 80-85% sustainable (allows maintenance, setup time)</li>
          </ul>
        </div>

        <div class="section">
          <h3>9.6 Maintenance & Ongoing Costs</h3>

          <h4>Preventive Maintenance Schedule</h4>

          <h5>Daily</h5>
          <ul>
            <li>Wire tension check</li>
            <li>Clean cutting area of debris</li>
            <li>Visual inspection of machine</li>
          </ul>

          <h5>Weekly</h5>
          <ul>
            <li>Lubrication of moving parts</li>
            <li>Air filter check (control cabinet)</li>
            <li>Wire condition inspection</li>
          </ul>

          <h5>Monthly</h5>
          <ul>
            <li>Detailed machine inspection</li>
            <li>Electrical connection tightness</li>
            <li>Software backup verification</li>
          </ul>

          <h5>Quarterly</h5>
          <ul>
            <li>Professional service (optional Year 1, recommended Year 2+)</li>
            <li>Wire replacement (as needed, typically 3-6 months)</li>
            <li>Calibration check</li>
          </ul>

          <div class="callout callout-info">
            <h4>Annual Maintenance Budget</h4>
            <ul>
              <li>Wire Replacement: $1,200-$2,400/year (4-8 sets)</li>
              <li>Spare Parts: $1,000-$2,000/year</li>
              <li>Professional Service: $1,500-$3,000/year</li>
              <li><strong>Total: $3,700-$7,400/year</strong></li>
            </ul>
          </div>
        </div>

        <!-- 10. SUCCESS METRICS & BENCHMARKING -->
        <h2 id="success-metrics" class="page-break">10. SUCCESS METRICS & BENCHMARKING</h2>

        <div class="section">
          <h3>10.1 Key Performance Indicators (KPIs)</h3>

          <h4>Financial KPIs</h4>

          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1 Target</th>
                <th>Year 2 Target</th>
                <th>Year 3 Target</th>
                <th>Industry Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revenue</td>
                <td>$250k-$400k</td>
                <td>$420k-$660k</td>
                <td>$600k-$900k</td>
                <td>N/A (growth phase)</td>
              </tr>
              <tr>
                <td>Gross Margin %</td>
                <td>33-38%</td>
                <td>38-42%</td>
                <td>40-45%</td>
                <td>30-50% (wholesale)</td>
              </tr>
              <tr>
                <td>Net Profit Margin %</td>
                <td>(5-10%) Loss</td>
                <td>5-10%</td>
                <td>12-18%</td>
                <td>10-25% (construction supply)</td>
              </tr>
              <tr>
                <td>Revenue per Employee</td>
                <td>$250k-$400k</td>
                <td>$210k-$330k</td>
                <td>$200k-$300k</td>
                <td>$180k-$250k typical</td>
              </tr>
              <tr>
                <td>Average Order Value</td>
                <td>$450-$650</td>
                <td>$550-$750</td>
                <td>$650-$850</td>
                <td>$500-$1,000</td>
              </tr>
              <tr>
                <td>Inventory Turnover</td>
                <td>15-20x</td>
                <td>20-25x</td>
                <td>24-28x</td>
                <td>20-30x (best practice)</td>
              </tr>
            </tbody>
          </table>

          <h4>Operational KPIs</h4>

          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1 Target</th>
                <th>Year 2 Target</th>
                <th>Year 3 Target</th>
                <th>Industry Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>On-Time Delivery %</td>
                <td>85-90%</td>
                <td>92-95%</td>
                <td>95-98%</td>
                <td>95%+ (excellent)</td>
              </tr>
              <tr>
                <td>Quote-to-Order Conversion</td>
                <td>25-35%</td>
                <td>35-45%</td>
                <td>45-55%</td>
                <td>30-50% (B2B)</td>
              </tr>
              <tr>
                <td>Customer Retention Rate</td>
                <td>40-50%</td>
                <td>60-70%</td>
                <td>70-80%</td>
                <td>60-75% (construction supply)</td>
              </tr>
              <tr>
                <td>Orders per Month</td>
                <td>40-60</td>
                <td>70-110</td>
                <td>100-150</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Equipment Utilization %</td>
                <td>30-40%</td>
                <td>50-65%</td>
                <td>65-80%</td>
                <td>70-85% (optimal)</td>
              </tr>
              <tr>
                <td>Waste % (Material)</td>
                <td>8-12%</td>
                <td>5-8%</td>
                <td>3-5%</td>
                <td>&lt;5% (best practice)</td>
              </tr>
            </tbody>
          </table>

          <h4>Customer Acquisition KPIs</h4>

          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1 Target</th>
                <th>Year 2 Target</th>
                <th>Year 3 Target</th>
                <th>Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Customers/Month</td>
                <td>8-12</td>
                <td>10-15</td>
                <td>12-18</td>
                <td>N/A (growth phase)</td>
              </tr>
              <tr>
                <td>Customer Acquisition Cost</td>
                <td>$150-$300</td>
                <td>$100-$200</td>
                <td>$80-$150</td>
                <td>&lt;$200 ideal</td>
              </tr>
              <tr>
                <td>Repeat Customer %</td>
                <td>25-35%</td>
                <td>45-55%</td>
                <td>60-70%</td>
                <td>50-70% (mature)</td>
              </tr>
              <tr>
                <td>Average Customer Lifetime Value</td>
                <td>$2,500-$4,000</td>
                <td>$5,000-$8,000</td>
                <td>$8,000-$12,000</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Customer Satisfaction (NPS)</td>
                <td>30-50</td>
                <td>50-65</td>
                <td>65-80</td>
                <td>50+ (good), 70+ (excellent)</td>
              </tr>
            </tbody>
          </table>

          <h4>Marketing KPIs</h4>

          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Year 1 Target</th>
                <th>Year 2 Target</th>
                <th>Year 3 Target</th>
                <th>Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Visitors/Month</td>
                <td>200-400</td>
                <td>500-800</td>
                <td>800-1,200</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Quote Requests/Month</td>
                <td>20-40</td>
                <td>50-80</td>
                <td>80-120</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Google Ranking (Primary Keywords)</td>
                <td>Top 10</td>
                <td>Top 5</td>
                <td>Top 3</td>
                <td>Top 5 ideal</td>
              </tr>
              <tr>
                <td>Marketing ROI</td>
                <td>2:1</td>
                <td>3:1</td>
                <td>4:1</td>
                <td>3:1+ good</td>
              </tr>
              <tr>
                <td>Referral Rate %</td>
                <td>15-25%</td>
                <td>25-35%</td>
                <td>35-45%</td>
                <td>30%+ excellent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h3>10.2 Industry Benchmarks</h3>

          <h4>Profit Margins (Construction Supply Sector)</h4>
          <ul>
            <li><strong>Wholesale Gross Margin:</strong> 30-35%</li>
            <li><strong>Retail Gross Margin:</strong> 35-50%</li>
            <li><strong>Net Profit Margin:</strong> 8-15%</li>
            <li><strong>EBITDA Margin:</strong> 12-20%</li>
          </ul>

          <h4>EPS/Foam Industry Specific</h4>
          <ul>
            <li><strong>Material Cost as % Revenue:</strong> 40-50%</li>
            <li><strong>Labor Cost as % Revenue:</strong> 20-30%</li>
            <li><strong>Overhead as % Revenue:</strong> 10-15%</li>
            <li><strong>Net Margin:</strong> 10-25% (established businesses)</li>
          </ul>

          <div class="callout callout-info">
            <h4>Comparable Business: Spray Foam Contractors</h4>
            <ul>
              <li><strong>Gross Margin:</strong> 50%</li>
              <li><strong>Net Profit:</strong> 25%</li>
              <li><strong>Revenue per Rig/Crew:</strong> $1 million+ annually</li>
              <li><em>(Note: Different business model, but similar industry segment)</em></li>
            </ul>
          </div>

          <h4>Sales Metrics</h4>
          <ul>
            <li><strong>Average Sales Cycle:</strong> 1-3 months (B2B construction)</li>
            <li><strong>Quote-to-Order Conversion:</strong> 30-50%</li>
            <li><strong>Repeat Business:</strong> 50-75% of revenue (mature business)</li>
            <li><strong>Customer Churn:</strong> 20-30% annually (construction industry)</li>
          </ul>

          <h4>Operational Efficiency</h4>
          <ul>
            <li><strong>Equipment Utilization:</strong> 70-85% (optimal, allows maintenance)</li>
            <li><strong>Material Waste:</strong> &lt;5% (best practice with CNC cutting)</li>
            <li><strong>On-Time Delivery:</strong> 95%+ (excellent reputation driver)</li>
            <li><strong>Order Fulfillment Time:</strong> 24-72 hours standard, same-day premium</li>
          </ul>
        </div>

        <div class="section">
          <h3>10.3 Competitive Positioning Targets</h3>

          <h4>Differentiation Metrics</h4>

          <h5>Service Speed</h5>
          <ul>
            <li><strong>Metric:</strong> Quote turnaround time</li>
            <li><strong>Target:</strong> &lt;2 hours (vs. industry 4-24 hours)</li>
            <li><strong>Competitive Advantage:</strong> 50-75% faster response</li>
          </ul>

          <h5>Delivery Speed</h5>
          <ul>
            <li><strong>Metric:</strong> Order to delivery time</li>
            <li><strong>Target:</strong> Same day (premium), 24 hours (standard) vs. 2-14 days industry</li>
            <li><strong>Competitive Advantage:</strong> 5-10x faster for urgent orders</li>
          </ul>

          <h5>Order Flexibility</h5>
          <ul>
            <li><strong>Metric:</strong> Minimum order value</li>
            <li><strong>Target:</strong> $0 minimum (vs. $250-$500 industry)</li>
            <li><strong>Competitive Advantage:</strong> Access to small builder/DIY segment</li>
          </ul>

          <h5>Local Coverage</h5>
          <ul>
            <li><strong>Metric:</strong> Delivery time within 20km</li>
            <li><strong>Target:</strong> &lt;2 hours for standard, &lt;4 hours same-day</li>
            <li><strong>Competitive Advantage:</strong> Geographic proximity</li>
          </ul>

          <h5>Customer Service</h5>
          <ul>
            <li><strong>Metric:</strong> Response time to inquiries</li>
            <li><strong>Target:</strong> &lt;1 hour phone, &lt;2 hours email (business hours)</li>
            <li><strong>Competitive Advantage:</strong> Personal, responsive service</li>
          </ul>
        </div>

        <div class="section">
          <h3>10.4 Financial Health Metrics</h3>

          <h4>Liquidity Ratios</h4>
          <ul>
            <li><strong>Current Ratio:</strong> &gt;1.5 (Current Assets / Current Liabilities)</li>
            <li><strong>Quick Ratio:</strong> &gt;1.0 (Cash + Receivables / Current Liabilities)</li>
            <li><strong>Cash Runway:</strong> 3-6 months operating expenses in reserve</li>
          </ul>

          <h4>Profitability Ratios</h4>
          <ul>
            <li><strong>Gross Profit Margin:</strong> 35-45% (Year 2-3)</li>
            <li><strong>Operating Profit Margin:</strong> 10-18% (Year 2-3)</li>
            <li><strong>Return on Assets (ROA):</strong> 15-25% (Year 3)</li>
            <li><strong>Return on Investment (ROI):</strong> 25-40% (Year 3)</li>
          </ul>

          <h4>Efficiency Ratios</h4>
          <ul>
            <li><strong>Asset Turnover:</strong> 2-3x (Revenue / Total Assets)</li>
            <li><strong>Inventory Turnover:</strong> 20-28x annually</li>
            <li><strong>Receivables Days:</strong> 20-30 days average</li>
            <li><strong>Payables Days:</strong> 30-45 days (optimize cash flow)</li>
          </ul>

          <h4>Growth Metrics</h4>
          <ul>
            <li><strong>Year-over-Year Revenue Growth:</strong> 60-80% (Year 1-2), 40-60% (Year 2-3)</li>
            <li><strong>Customer Base Growth:</strong> 50-80% annually (Years 1-3)</li>
            <li><strong>Average Order Value Growth:</strong> 15-25% annually</li>
          </ul>
        </div>

        <div class="section">
          <h3>10.5 Dashboard & Reporting</h3>

          <h4>Weekly Metrics (Operations Focus)</h4>
          <ul>
            <li>Revenue (actual vs. target)</li>
            <li>Orders received and fulfilled</li>
            <li>Quote conversion rate</li>
            <li>Delivery performance</li>
            <li>Material usage and waste</li>
            <li>Cash position</li>
          </ul>

          <h4>Monthly Metrics (Management Focus)</h4>
          <ul>
            <li>P&L summary (revenue, costs, profit)</li>
            <li>Customer acquisition (new, churned, net)</li>
            <li>Inventory levels and turnover</li>
            <li>AR/AP aging</li>
            <li>Equipment utilization</li>
            <li>Marketing ROI</li>
          </ul>

          <h4>Quarterly Metrics (Strategic Focus)</h4>
          <ul>
            <li>Revenue and profit vs. plan</li>
            <li>Customer satisfaction survey results</li>
            <li>Market share estimates</li>
            <li>Competitive positioning</li>
            <li>Strategic initiative progress</li>
            <li>Cash flow projection (12 months ahead)</li>
          </ul>

          <div class="callout callout-info">
            <h4>Recommended Tools</h4>
            <ul>
              <li><strong>Accounting Software:</strong> Xero, MYOB for financial tracking</li>
              <li><strong>Dashboard:</strong> Power BI, Tableau, or Excel for KPI visualization</li>
              <li><strong>CRM:</strong> HubSpot, Salesforce for customer metrics</li>
              <li><strong>Inventory:</strong> Integrated with accounting or standalone system</li>
            </ul>
          </div>
        </div>

        <!-- 11. ACTION PLAN -->
        <h2 id="action-plan" class="page-break">11. ACTION PLAN: STEP-BY-STEP MARKET ENTRY</h2>

        <div class="section">
          <h3>Phase 1: Research & Planning (Months -3 to -1 before launch)</h3>

          <h4>Month -3: Deep Due Diligence</h4>

          <h5>Week 1-2: Market Validation</h5>
          <ul>
            <li>Visit 15-20 construction sites, observe foam usage</li>
            <li>Interview 10-15 builders (informal research, gauge interest)</li>
            <li>Contact competitors as "customer" to understand pricing, service levels</li>
            <li>Attend 2-3 industry networking events (HIA, Master Builders)</li>
          </ul>

          <h5>Week 3-4: Financial Modeling</h5>
          <ul>
            <li>Refine financial projections based on research</li>
            <li>Develop detailed cash flow model (monthly, Year 1-3)</li>
            <li>Sensitivity analysis (best/worst case scenarios)</li>
            <li>Finalize funding requirements and sources</li>
          </ul>

          <h4>Month -2: Business Setup</h4>

          <h5>Week 1-2: Legal & Regulatory</h5>
          <ul>
            <li>Register business name, ABN</li>
            <li>Consult accountant on business structure (sole trader vs. company)</li>
            <li>Apply for necessary licenses, permits</li>
            <li>Set up business bank account, accounting software</li>
          </ul>

          <h5>Week 3-4: Supplier & Equipment</h5>
          <ul>
            <li>Request quotes from 3-4 equipment suppliers (Wintech priority)</li>
            <li>Negotiate with 2-3 EPS suppliers (Ausblox, Foamex primary targets)</li>
            <li>Arrange facility inspection for equipment installation</li>
            <li>Confirm electrical capacity, arrange upgrades if needed</li>
          </ul>

          <h4>Month -1: Pre-Launch Preparation</h4>

          <h5>Week 1-2: Infrastructure</h5>
          <ul>
            <li>Order CNC equipment (12-16 week lead time typically)</li>
            <li>Facility improvements (electrical, lighting, flooring)</li>
            <li>Purchase forklift, hand tools, supporting equipment</li>
            <li>Set up office area, computer systems</li>
          </ul>

          <h5>Week 3-4: Marketing Foundation</h5>
          <ul>
            <li>Develop logo, branding</li>
            <li>Build website (basic online quoting capability)</li>
            <li>Set up Google Business Profile</li>
            <li>Prepare marketing materials (business cards, flyers)</li>
            <li>Launch social media accounts (LinkedIn, Facebook for business)</li>
          </ul>
        </div>

        <div class="section">
          <h3>Phase 2: Launch & Ramp-Up (Months 1-6)</h3>

          <h4>Month 1: Soft Launch</h4>

          <h5>Week 1-2: Equipment Commissioning</h5>
          <ul>
            <li>CNC machine delivery and installation</li>
            <li>Technician training (Wintech or equivalent)</li>
            <li>Test cuts, calibration, quality verification</li>
            <li>Safety procedures documented and implemented</li>
          </ul>

          <h5>Week 3-4: Initial Sales</h5>
          <ul>
            <li>Contact 30-50 prospective customers (prepared list)</li>
            <li>Offer launch promotion (20% off first order, free delivery)</li>
            <li>Process first 5-10 orders (likely small, relationship-building)</li>
            <li>Collect testimonials, permission for referrals</li>
          </ul>

          <h4>Month 2-3: Customer Acquisition Blitz</h4>

          <h5>Sales Activity:</h5>
          <ul>
            <li>100+ outbound calls to construction companies</li>
            <li>Visit 20-30 active construction sites</li>
            <li>Join HIA, Master Builders (networking access)</li>
            <li>Attend 2-3 trade events, industry breakfasts</li>
          </ul>

          <h5>Marketing Launch:</h5>
          <ul>
            <li>Google Ads campaign launch ($300-400/month)</li>
            <li>Direct mail to 200-300 targeted businesses</li>
            <li>Press release to local business publications</li>
            <li>Website SEO optimization ongoing</li>
          </ul>

          <p><strong>Target: 8-12 new customers, 30-45 orders processed</strong></p>

          <h4>Month 4-6: Process Refinement</h4>

          <h5>Operations:</h5>
          <ul>
            <li>Review cutting efficiency, optimize waste</li>
            <li>Refine quoting process based on actual time/material data</li>
            <li>Implement quality control checks</li>
            <li>Develop customer feedback system</li>
          </ul>

          <h5>Sales & Marketing:</h5>
          <ul>
            <li>Analyze customer acquisition channels (which working best)</li>
            <li>Adjust marketing spend allocation based on ROI</li>
            <li>Develop customer referral program</li>
            <li>Create case studies from successful projects</li>
          </ul>

          <p><strong>Target: 40-60 orders/month by Month 6, 30-50 active customers</strong></p>
        </div>

        <div class="section">
          <h3>Phase 3: Stabilization (Months 7-12)</h3>

          <h4>Month 7-9: Operational Excellence</h4>
          <ul>
            <li>Hire part-time assistant (if revenue supports, ~$15k-20k annual)</li>
            <li>Implement inventory management system</li>
            <li>Establish maintenance schedule, spare parts inventory</li>
            <li>Develop standard operating procedures (SOPs) for key processes</li>
          </ul>

          <h4>Month 10-12: Growth Preparation</h4>
          <ul>
            <li>Evaluate Year 1 performance against projections</li>
            <li>Identify top customer segments (double down)</li>
            <li>Assess equipment capacity vs. demand</li>
            <li>Plan Year 2 growth initiatives (2nd shift, additional wire capacity)</li>
          </ul>

          <p><strong>Target: 50-70 orders/month, break-even or slight profitability by Month 12</strong></p>
        </div>

        <div class="section">
          <h3>Phase 4: Year 2-3 Growth</h3>

          <h4>Year 2 Objectives</h4>
          <ul>
            <li><strong>Revenue:</strong> $420,000-$660,000</li>
            <li><strong>Customer Base:</strong> 80-120 active accounts</li>
            <li><strong>Equipment Utilization:</strong> 50-65%</li>
            <li><strong>Profitability:</strong> 5-10% net margin</li>
            <li><strong>Hire:</strong> 1 FTE (operator or sales, depending on bottleneck)</li>
          </ul>

          <h4>Year 3 Objectives</h4>
          <ul>
            <li><strong>Revenue:</strong> $600,000-$900,000</li>
            <li><strong>Customer Base:</strong> 150-200 active accounts</li>
            <li><strong>Equipment Utilization:</strong> 65-80%</li>
            <li><strong>Profitability:</strong> 12-18% net margin</li>
            <li><strong>Team:</strong> 2-3 FTE total</li>
            <li><strong>Evaluate:</strong> Equipment upgrade (40-wire capacity, or 2nd machine)</li>
          </ul>
        </div>

        <div class="section">
          <h3>Critical Success Factors</h3>

          <div class="callout callout-warning">
            <h4>1. Rapid Customer Acquisition (Months 1-6)</h4>
            <ul>
              <li><strong>Target:</strong> 8-12 new customers/month average</li>
              <li><strong>Critical:</strong> Reach 40+ orders/month by Month 6</li>
              <li><strong>Failure Point:</strong> &lt;20 orders/month Month 6 = serious concern</li>
              <li><strong>Action:</strong> Founder must dedicate 60-70% time to sales initially</li>
            </ul>
          </div>

          <div class="callout callout-warning">
            <h4>2. Service Differentiation Execution</h4>
            <ul>
              <li><strong>Key:</strong> Deliver on promises (same-day, no minimums, quality)</li>
              <li><strong>Reputation:</strong> Word-of-mouth drives 25-30% of sales</li>
              <li><strong>Monitoring:</strong> Customer satisfaction NPS score 50+ essential</li>
              <li><strong>Risk:</strong> One major service failure can damage reputation significantly</li>
            </ul>
          </div>

          <div class="callout callout-warning">
            <h4>3. Operational Efficiency</h4>
            <ul>
              <li><strong>Material Waste:</strong> Must achieve &lt;8% Year 1, &lt;5% Year 2-3</li>
              <li><strong>Labor Productivity:</strong> Owner must become highly efficient operator (learning curve 3-6 months)</li>
              <li><strong>Equipment Uptime:</strong> 95%+ critical (breakdowns = lost revenue, angry customers)</li>
              <li><strong>Quality:</strong> Zero tolerance for dimensional errors &gt;1mm on precision cuts</li>
            </ul>
          </div>

          <div class="callout callout-warning">
            <h4>4. Cash Flow Management</h4>
            <ul>
              <li><strong>Working Capital:</strong> Maintain $15k-25k buffer at all times</li>
              <li><strong>Receivables:</strong> 30-day terms, aggressive collection at 35 days</li>
              <li><strong>Payables:</strong> Negotiate 45-60 day terms with suppliers (cash flow timing)</li>
              <li><strong>Warning Sign:</strong> &lt;$10k cash buffer = immediate action required</li>
            </ul>
          </div>

          <div class="callout callout-warning">
            <h4>5. Competitive Positioning Clarity</h4>
            <ul>
              <li><strong>Messaging:</strong> "Fast, Flexible, Local" - must be consistent, credible</li>
              <li><strong>Avoid:</strong> Trying to compete on price for large commodity orders</li>
              <li><strong>Focus:</strong> Win on service, responsiveness, specialty applications</li>
              <li><strong>Review:</strong> Quarterly assessment of value proposition effectiveness</li>
            </ul>
          </div>
        </div>

        <!-- 12. SWOT Analysis (Enhanced) -->
        <h2 id="swot" class="page-break">12. SWOT ANALYSIS</h2>

        <div class="strengths">
            <h3>Strengths (6 High-Impact Factors)</h3>
            <ol>
                <li><strong>S1: Strategic Location</strong>
                    <ul>
                        <li>Positioned in construction-heavy Canterbury-Bankstown LGA (22.5% construction businesses vs 17.1% NSW avg = +31% higher)</li>
                        <li>Central Sydney access: 20km radius covers 25,000+ construction businesses</li>
                        <li>Owned facility eliminates rent expense ($30-40k/year saving)</li>
                        <li>M5 Motorway proximity enables rapid delivery across metro Sydney</li>
                    </ul>
                </li>
                <li><strong>S2: Service Differentiation Capability</strong>
                    <ul>
                        <li>No minimum order requirements (vs $250-$500 competitor minimums)</li>
                        <li>Same-day delivery potential (vs 1-14 day industry standard)</li>
                        <li>Local presence enables responsive, personalized service</li>
                        <li>Technical consultation value-add for customers</li>
                    </ul>
                </li>
                <li><strong>S3: Market Timing</strong>
                    <ul>
                        <li>NSW building approvals up 30.4%, strong construction recovery underway</li>
                        <li>Australian construction market growing at 5-8% CAGR to 2030</li>
                        <li>Brisbane 2032 Olympics creating construction boom (indirect NSW benefits)</li>
                        <li>Government infrastructure spending sustained at high levels ($17.1B federal, $19.3B/year NSW)</li>
                    </ul>
                </li>
                <li><strong>S4: Equipment & Technology</strong>
                    <ul>
                        <li>Australian-made Wintech equipment with local support</li>
                        <li>CNC precision (±0.3-0.5mm) enables premium applications</li>
                        <li>Automated operation reduces labor requirements</li>
                        <li>Scalability: Upgrade capability from 20 to 40 wires</li>
                    </ul>
                </li>
                <li><strong>S5: Owner Expertise & Financial Capacity</strong>
                    <ul>
                        <li>Data science and AI background enables sophisticated business analytics</li>
                        <li>Financial modeling capability for customer solutions and business optimization</li>
                        <li>Property investment experience demonstrates business acumen</li>
                        <li>$270k annual income provides financial stability during ramp-up</li>
                    </ul>
                </li>
                <li><strong>S6: Industry Economics</strong>
                    <ul>
                        <li>Wholesale margins 30-50% are attractive</li>
                        <li>Comparable spray foam businesses achieve 25% net profit</li>
                        <li>Low regulatory barriers compared to food service or healthcare</li>
                        <li>Proven business model in other metro areas</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="weaknesses">
            <h3>Weaknesses (5 Areas to Address)</h3>
            <ol>
                <li><strong>W1: New Market Entrant</strong>
                    <ul>
                        <li>No established customer base or relationships</li>
                        <li>Brand recognition zero in market</li>
                        <li>No track record for customers to reference</li>
                        <li>Learning curve on operational efficiency, waste minimization</li>
                    </ul>
                </li>
                <li><strong>W2: Limited Initial Scale</strong>
                    <ul>
                        <li>Cannot compete on price with high-volume manufacturers</li>
                        <li>Single-machine capacity limits output (vs multi-machine competitors)</li>
                        <li>No economies of scale on material purchasing initially</li>
                        <li>Higher per-unit costs in early phases</li>
                    </ul>
                </li>
                <li><strong>W3: Capital Intensity</strong>
                    <ul>
                        <li>$180k-$250k equipment investment before first sale</li>
                        <li>18-24 month break-even timeline</li>
                        <li>Working capital requirements for inventory, receivables</li>
                        <li>High fixed costs regardless of revenue</li>
                    </ul>
                </li>
                <li><strong>W4: Owner-Dependent Operations</strong>
                    <ul>
                        <li>Initially relies on owner for sales, operations, delivery</li>
                        <li>Limited redundancy if owner unavailable</li>
                        <li>Difficult to scale beyond owner capacity without hiring</li>
                        <li>Vacation/illness directly impacts business continuity</li>
                    </ul>
                </li>
                <li><strong>W5: No Manufacturing Capability</strong>
                    <ul>
                        <li>Reliant on external suppliers for raw materials</li>
                        <li>Cannot control supply chain entirely</li>
                        <li>Exposed to supplier price increases, availability issues</li>
                        <li>Less vertical integration than manufacturer-competitors</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="opportunities">
            <h3>Opportunities (7 Growth Paths)</h3>
            <ol>
                <li><strong>O1: Underserved Market Segments</strong>
                    <ul>
                        <li>Small builders and renovators (below competitor minimums)</li>
                        <li>Emergency/rush orders (premium pricing acceptable)</li>
                        <li>Specialty applications (signage, marine, theatrical)</li>
                        <li>Geographic coverage gaps in St George/Canterbury area</li>
                    </ul>
                </li>
                <li><strong>O2: Construction Market Growth</strong>
                    <ul>
                        <li>$17.1B federal transport infrastructure spending</li>
                        <li>NSW housing shortage driving 200k+ annual approvals target</li>
                        <li>Western Sydney Airport precinct development</li>
                        <li>Renovation market in established suburbs (older housing stock)</li>
                    </ul>
                </li>
                <li><strong>O3: Brisbane 2032 Olympics Spillover</strong>
                    <ul>
                        <li>QLD construction boom may create NSW opportunities</li>
                        <li>Potential for interstate supply if QLD capacity constrained</li>
                        <li>Sydney construction may benefit from resource rebalancing post-2032</li>
                        <li>Associated infrastructure spending across Eastern Australia</li>
                    </ul>
                </li>
                <li><strong>O4: Sustainability Differentiation</strong>
                    <ul>
                        <li>EPS recycling program (vs landfill)</li>
                        <li>Environmental credentials attractive to eco-conscious customers</li>
                        <li>Potential for recycled-content products (35-100% post-consumer)</li>
                        <li>Circular economy partnerships with EPSA members</li>
                    </ul>
                </li>
                <li><strong>O5: Technology & Automation Advantages</strong>
                    <ul>
                        <li>CNC cutting enables complex geometries competitors may not offer</li>
                        <li>Nesting software optimizes material usage (reduces waste, improves margins)</li>
                        <li>Digital design services attract architects, designers</li>
                        <li>Online quoting reduces sales friction, improves conversion</li>
                    </ul>
                </li>
                <li><strong>O6: Vertical Integration Potential</strong>
                    <ul>
                        <li>Phase 2: Add manufacturing capability (EPS block molding)</li>
                        <li>Expand to XPS, polyurethane products</li>
                        <li>Develop proprietary foam products for specific applications</li>
                        <li>Acquisitions of smaller competitors as market share grows</li>
                    </ul>
                </li>
                <li><strong>O7: E-commerce & Packaging Growth</strong>
                    <ul>
                        <li>Online retail expansion creates packaging demand</li>
                        <li>Cold chain logistics growth (food delivery, pharmaceuticals)</li>
                        <li>Custom packaging solutions for local manufacturers</li>
                        <li>Protective packaging for electronics, fragile goods</li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="threats">
            <h3>Threats (8 Risks to Monitor)</h3>
            <ol>
                <li><strong>T1: Established Competition</strong>
                    <ul>
                        <li>The Foam Company, Ausblox, Foamex have national scale, brand recognition</li>
                        <li>Price competition on large orders difficult to win</li>
                        <li>Customer loyalty to existing suppliers strong</li>
                        <li>Competitors may respond aggressively to new entrant</li>
                    </ul>
                </li>
                <li><strong>T2: Economic Downturn Risk</strong>
                    <ul>
                        <li>Construction is cyclical and recession-sensitive</li>
                        <li>Potential recession 2025-2027 if economic conditions deteriorate</li>
                        <li>Interest rate uncertainty impacts residential construction</li>
                        <li>Business confidence affects commercial building activity</li>
                    </ul>
                </li>
                <li><strong>T3: Material Cost Volatility</strong>
                    <ul>
                        <li>EPS feedstock linked to petroleum prices (5-8% annual variation typical)</li>
                        <li>Styrene price fluctuations impact profitability</li>
                        <li>Limited ability to pass through costs immediately</li>
                        <li>Supplier pricing power if consolidated market</li>
                    </ul>
                </li>
                <li><strong>T4: Labor Shortages</strong>
                    <ul>
                        <li>Construction sector needs 90,000 additional workers nationally</li>
                        <li>Skilled labor shortages drive wage inflation</li>
                        <li>Difficulty hiring as business scales</li>
                        <li>Competition for workers from larger employers</li>
                    </ul>
                </li>
                <li><strong>T5: Regulatory & Environmental Pressures</strong>
                    <ul>
                        <li>Single-use plastic bans expanding (food service already banned)</li>
                        <li>Extended Producer Responsibility schemes for packaging</li>
                        <li>Potential carbon taxes on petroleum-based products</li>
                        <li>Building code changes affecting EPS applications</li>
                    </ul>
                </li>
                <li><strong>T6: Technological Substitution</strong>
                    <ul>
                        <li>Alternative insulation materials (spray foam, mineral wool, aerogel)</li>
                        <li>Bio-based foams and packaging materials emerging</li>
                        <li>Prefabricated panel systems potentially reducing on-site cutting demand</li>
                        <li>3D printing of construction components (long-term)</li>
                    </ul>
                </li>
                <li><strong>T7: Customer Concentration Risk</strong>
                    <ul>
                        <li>Heavy reliance on construction sector (44.8% of EPS market)</li>
                        <li>Top 10 customers may represent 40-60% of revenue (typical in B2B)</li>
                        <li>Loss of major customer materially impacts revenue</li>
                        <li>Construction sector correlation creates cyclical vulnerability</li>
                    </ul>
                </li>
                <li><strong>T8: Supply Chain Disruption</strong>
                    <ul>
                        <li>Supplier business failure or capacity constraints</li>
                        <li>Import disruptions (if using imported feedstocks)</li>
                        <li>Transport strikes or fuel shortages</li>
                        <li>Natural disasters affecting Sydney operations</li>
                    </ul>
                </li>
            </ol>
        </div>

        <!-- 13. Risk Assessment -->
        <h2 id="risk-assessment" class="page-break">13. RISK ASSESSMENT MATRIX</h2>

        <div class="section">
            <h3>High Priority Risks (Immediate Mitigation Required)</h3>

            <div class="risk-high">
                <h4>RISK 1: Insufficient Customer Acquisition</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Medium-High (40-50%)</li>
                    <li><strong>Impact:</strong> Critical (threatens viability)</li>
                    <li><strong>Scenario:</strong> Unable to reach 40 orders/month by Month 12</li>
                    <li><strong>Financial Impact:</strong> Revenue 30-50% below target, extended losses</li>
                    <li><strong>Mitigation Strategies:</strong>
                        <ul style="margin-top: 8px;">
                            <li>Pre-launch customer pipeline development (3 months prior)</li>
                            <li>Aggressive first-customer discounts (20% off)</li>
                            <li>Free trials/samples to target accounts</li>
                            <li>Founder-led sales (high activity, 50+ calls/week initially)</li>
                            <li>Marketing spend frontloaded (digital ads, direct mail)</li>
                        </ul>
                    </li>
                    <li><strong>Contingency:</strong> Owner salary draw reduction, extend break-even timeline</li>
                </ul>
            </div>

            <div class="risk-high">
                <h4>RISK 2: Major Competitor Price War</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Medium (30-40%)</li>
                    <li><strong>Impact:</strong> High (margin compression)</li>
                    <li><strong>Scenario:</strong> Incumbent responds to new entrant with aggressive pricing</li>
                    <li><strong>Financial Impact:</strong> 10-20% margin erosion, profitability delayed</li>
                    <li><strong>Mitigation Strategies:</strong>
                        <ul style="margin-top: 8px;">
                            <li>Differentiate on service, not price (speed, flexibility, minimums)</li>
                            <li>Target niches large players ignore (small orders, specialty cuts)</li>
                            <li>Build switching costs through relationships, technical value</li>
                            <li>Monitor competitor pricing monthly, adjust tactically</li>
                        </ul>
                    </li>
                    <li><strong>Contingency:</strong> Cost reduction (lean operations), pricing discipline</li>
                </ul>
            </div>

            <div class="risk-high">
                <h4>RISK 3: Equipment Breakdown/Failure</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Low-Medium (15-25% major issue in Year 1)</li>
                    <li><strong>Impact:</strong> Critical (revenue stops)</li>
                    <li><strong>Scenario:</strong> CNC equipment failure, extended downtime</li>
                    <li><strong>Financial Impact:</strong> Lost revenue $5k-15k/week, repair costs $5k-20k</li>
                    <li><strong>Mitigation Strategies:</strong>
                        <ul style="margin-top: 8px;">
                            <li>Purchase new equipment with 12-month warranty</li>
                            <li>Preventive maintenance schedule strictly followed</li>
                            <li>Spare parts inventory (wires, critical components)</li>
                            <li>Backup manual cutting capability for emergencies</li>
                            <li>Equipment insurance coverage</li>
                        </ul>
                    </li>
                    <li><strong>Contingency:</strong> Outsource cutting to competitor temporarily, expedited repair</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h3>Medium Priority Risks (Regular Monitoring)</h3>

            <div class="risk-medium">
                <h4>RISK 4: Working Capital Shortage</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Medium (30-35%)</li>
                    <li><strong>Impact:</strong> Medium-High (constraints growth)</li>
                    <li><strong>Mitigation:</strong> $20k working capital buffer, strict credit terms, inventory management, supplier payment terms negotiation, line of credit facility</li>
                    <li><strong>Contingency:</strong> Owner capital injection, invoice factoring</li>
                </ul>
            </div>

            <div class="risk-medium">
                <h4>RISK 5: Key Employee Departure (if hired)</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Medium (25-35% in small business)</li>
                    <li><strong>Impact:</strong> Medium (operational disruption)</li>
                    <li><strong>Mitigation:</strong> Competitive compensation, cross-training, documented SOPs, maintain recruitment pipeline</li>
                    <li><strong>Contingency:</strong> Owner fills gap temporarily, temp agency, accelerated hiring</li>
                </ul>
            </div>

            <div class="risk-medium">
                <h4>RISK 6: Quality/Customer Complaint Issue</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Medium (20-30% of having significant issue)</li>
                    <li><strong>Impact:</strong> Medium (reputation damage, refunds)</li>
                    <li><strong>Mitigation:</strong> Quality control procedures, customer approval checkpoints, professional liability insurance, complaint resolution process</li>
                    <li><strong>Contingency:</strong> Public apology, discount future orders, process improvement</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h3>Lower Priority Risks (Watch List)</h3>

            <div class="risk-low">
                <h4>RISK 7: Regulatory Change Affecting EPS</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Low (10-15% construction/industrial affected by 2030)</li>
                    <li><strong>Impact:</strong> Medium-High (if occurs)</li>
                    <li><strong>Mitigation:</strong> Monitor EPSA and industry associations, advocate against ban expansion, diversify product range</li>
                    <li><strong>Contingency:</strong> Pivot to alternative foam materials (XPS, polyurethane)</li>
                </ul>
            </div>

            <div class="risk-low">
                <h4>RISK 8: Natural Disaster (Fire, Flood)</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Low (5-10%)</li>
                    <li><strong>Impact:</strong> Critical (total loss possible)</li>
                    <li><strong>Mitigation:</strong> Business/equipment insurance, fire suppression, elevated storage, off-site backups</li>
                    <li><strong>Contingency:</strong> Insurance claim, temporary relocation, rebuild</li>
                </ul>
            </div>

            <div class="risk-low">
                <h4>RISK 9: Cyber Attack / Data Breach</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Low-Medium (15-20% for small business)</li>
                    <li><strong>Impact:</strong> Low-Medium (reputation, data loss)</li>
                    <li><strong>Mitigation:</strong> Cybersecurity basics, cyber insurance, limited credit card storage, cloud-based systems</li>
                    <li><strong>Contingency:</strong> IT professional assistance, customer notification, credit monitoring</li>
                </ul>
            </div>

            <div class="risk-low">
                <h4>RISK 10: Owner Health/Injury</h4>
                <ul>
                    <li><strong>Likelihood:</strong> Low (10-15%)</li>
                    <li><strong>Impact:</strong> Critical (business stops)</li>
                    <li><strong>Mitigation:</strong> Personal health insurance, income protection, safety protocols, backup key person</li>
                    <li><strong>Contingency:</strong> Temporary manager hired, business sale if extended, disability insurance payout</li>
                </ul>
            </div>
        </div>

        <!-- 14. Action Plan -->
        <h2 id="action-plan" class="page-break">14. ACTION PLAN: STEP-BY-STEP MARKET ENTRY</h2>

        <div class="section">
            <h3>Phase 1: Research & Planning (Months -3 to -1)</h3>

            <h4>Month -3: Deep Due Diligence</h4>
            <div class="subsection">
                <p><strong>Week 1-2: Market Validation</strong></p>
                <ul>
                    <li>☐ Visit 15-20 construction sites, observe foam usage</li>
                    <li>☐ Interview 10-15 builders (informal research, gauge interest)</li>
                    <li>☐ Contact competitors as "customer" to understand pricing, service levels</li>
                    <li>☐ Attend 2-3 industry networking events (HIA, Master Builders)</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Week 3-4: Financial Modeling</strong></p>
                <ul>
                    <li>☐ Refine financial projections based on research</li>
                    <li>☐ Develop detailed cash flow model (monthly, Year 1-3)</li>
                    <li>☐ Sensitivity analysis (best/worst case scenarios)</li>
                    <li>☐ Finalize funding requirements and sources</li>
                </ul>
            </div>

            <h4>Month -2: Business Setup</h4>
            <div class="subsection">
                <p><strong>Week 1-2: Legal & Regulatory</strong></p>
                <ul>
                    <li>☐ Register business name, ABN</li>
                    <li>☐ Consult accountant on business structure (sole trader vs. company)</li>
                    <li>☐ Apply for necessary licenses, permits</li>
                    <li>☐ Set up business bank account, accounting software (Xero/MYOB)</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Week 3-4: Supplier & Equipment</strong></p>
                <ul>
                    <li>☐ Request quotes from 3-4 equipment suppliers (Wintech priority)</li>
                    <li>☐ Negotiate with 2-3 EPS suppliers (Ausblox, Foamex primary targets)</li>
                    <li>☐ Arrange facility inspection for equipment installation</li>
                    <li>☐ Confirm electrical capacity, arrange upgrades if needed</li>
                </ul>
            </div>

            <h4>Month -1: Pre-Launch Preparation</h4>
            <div class="subsection">
                <p><strong>Week 1-2: Infrastructure</strong></p>
                <ul>
                    <li>☐ Order CNC equipment (12-16 week lead time typically)</li>
                    <li>☐ Facility improvements (electrical, lighting, flooring)</li>
                    <li>☐ Purchase forklift, hand tools, supporting equipment</li>
                    <li>☐ Set up office area, computer systems</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Week 3-4: Marketing Foundation</strong></p>
                <ul>
                    <li>☐ Develop logo, branding</li>
                    <li>☐ Build website (basic online quoting capability)</li>
                    <li>☐ Set up Google Business Profile</li>
                    <li>☐ Prepare marketing materials (business cards, flyers)</li>
                    <li>☐ Launch social media accounts (LinkedIn, Facebook for business)</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h3>Phase 2: Launch & Ramp-Up (Months 1-6)</h3>

            <h4>Month 1: Soft Launch</h4>
            <div class="subsection">
                <p><strong>Week 1-2: Equipment Commissioning</strong></p>
                <ul>
                    <li>☐ CNC machine delivery and installation</li>
                    <li>☐ Technician training (Wintech or equivalent)</li>
                    <li>☐ Test cuts, calibration, quality verification</li>
                    <li>☐ Safety procedures documented and implemented</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Week 3-4: Initial Sales</strong></p>
                <ul>
                    <li>☐ Contact 30-50 prospective customers (prepared list)</li>
                    <li>☐ Offer launch promotion (20% off first order, free delivery)</li>
                    <li>☐ Process first 5-10 orders (likely small, relationship-building)</li>
                    <li>☐ Collect testimonials, permission for referrals</li>
                </ul>
            </div>

            <h4>Month 2-3: Customer Acquisition Blitz</h4>
            <div class="subsection">
                <p><strong>Sales Activity:</strong></p>
                <ul>
                    <li>☐ 100+ outbound calls to construction companies</li>
                    <li>☐ Visit 20-30 active construction sites</li>
                    <li>☐ Join HIA, Master Builders (networking access)</li>
                    <li>☐ Attend 2-3 trade events, industry breakfasts</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Marketing Launch:</strong></p>
                <ul>
                    <li>☐ Google Ads campaign launch ($300-400/month)</li>
                    <li>☐ Direct mail to 200-300 targeted businesses</li>
                    <li>☐ Press release to local business publications</li>
                    <li>☐ Website SEO optimization ongoing</li>
                </ul>

                <p style="margin-top: 12px;"><strong>Target: 8-12 new customers, 30-45 orders processed</strong></p>
            </div>

            <h4>Month 4-6: Process Refinement</h4>
            <div class="subsection">
                <p><strong>Operations:</strong></p>
                <ul>
                    <li>☐ Review cutting efficiency, optimize waste</li>
                    <li>☐ Refine quoting process based on actual time/material data</li>
                    <li>☐ Implement quality control checks</li>
                    <li>☐ Develop customer feedback system</li>
                </ul>

                <p style="margin-top: 16px;"><strong>Sales & Marketing:</strong></p>
                <ul>
                    <li>☐ Analyze customer acquisition channels (which working best)</li>
                    <li>☐ Adjust marketing spend allocation based on ROI</li>
                    <li>☐ Develop customer referral program</li>
                    <li>☐ Create case studies from successful projects</li>
                </ul>

                <p style="margin-top: 12px;"><strong>Target: 40-60 orders/month by Month 6, 30-50 active customers</strong></p>
            </div>
        </div>

        <div class="section">
            <h3>Phase 3: Stabilization (Months 7-12)</h3>

            <h4>Month 7-9: Operational Excellence</h4>
            <ul>
                <li>☐ Hire part-time assistant (if revenue supports, ~$15k-20k annual)</li>
                <li>☐ Implement inventory management system</li>
                <li>☐ Establish maintenance schedule, spare parts inventory</li>
                <li>☐ Develop standard operating procedures (SOPs) for key processes</li>
            </ul>

            <h4>Month 10-12: Growth Preparation</h4>
            <ul>
                <li>☐ Evaluate Year 1 performance against projections</li>
                <li>☐ Identify top customer segments (double down)</li>
                <li>☐ Assess equipment capacity vs. demand</li>
                <li>☐ Plan Year 2 growth initiatives (2nd shift, additional wire capacity)</li>
            </ul>

            <p style="margin-top: 12px;"><strong>Target: 50-70 orders/month, break-even or slight profitability by Month 12</strong></p>
        </div>

        <div class="section">
            <h3>Phase 4: Year 2-3 Growth</h3>

            <h4>Year 2 Objectives</h4>
            <ul>
                <li>Revenue: <strong>$420,000-$660,000</strong></li>
                <li>Customer Base: <strong>80-120 active accounts</strong></li>
                <li>Equipment Utilization: <strong>50-65%</strong></li>
                <li>Profitability: <strong>5-10% net margin</strong></li>
                <li>Hire: <strong>1 FTE</strong> (operator or sales, depending on bottleneck)</li>
            </ul>

            <h4>Year 3 Objectives</h4>
            <ul>
                <li>Revenue: <strong>$600,000-$900,000</strong></li>
                <li>Customer Base: <strong>150-200 active accounts</strong></li>
                <li>Equipment Utilization: <strong>65-80%</strong></li>
                <li>Profitability: <strong>12-18% net margin</strong></li>
                <li>Team: <strong>2-3 FTE total</strong></li>
                <li>Evaluate: Equipment upgrade (40-wire capacity, or 2nd machine)</li>
            </ul>
        </div>

        <!-- 15. Go/No-Go Recommendation -->
        <h2 id="go-no-go" class="page-break">15. GO/NO-GO RECOMMENDATION</h2>

        <div class="callout callout-success">
            <h3>✓ RECOMMENDATION: PROCEED WITH BUSINESS (Conditional)</h3>

            <h4 style="margin-top: 16px;">Rationale:</h4>
            <p>The EPS foam cutting business in Hurstville/Padstow presents a <strong>viable opportunity</strong> with attractive fundamentals:</p>

            <ul style="margin-top: 12px;">
                <li>✅ <strong>Strong Market Fundamentals:</strong> NSW construction recovery (30.4% approvals growth), Australian market expanding at 5-8% CAGR to 2030</li>
                <li>✅ <strong>Strategic Location:</strong> Canterbury-Bankstown has 31% higher construction business density than NSW average, owned facility eliminates rent expense</li>
                <li>✅ <strong>Service Differentiation Opportunity:</strong> Clear gaps in market (small orders, same-day service, local responsiveness)</li>
                <li>✅ <strong>Favorable Industry Economics:</strong> Wholesale margins 30-50%, comparable foam businesses achieving 25% net profit</li>
                <li>✅ <strong>Owner Capability:</strong> Strong analytical skills, financial capacity to sustain business through ramp-up</li>
                <li>✅ <strong>Reasonable Break-Even:</strong> 18-24 months is achievable in B2B service businesses</li>
                <li>✅ <strong>Scalable Model:</strong> Can start solo, hire as revenue supports, upgrade equipment incrementally</li>
            </ul>
        </div>

        <div class="section">
            <h3>Conditions for Proceeding</h3>

            <div class="strengths">
                <h4>✓ Proceed to Launch If:</h4>
                <ol>
                    <li><strong>Validate Demand:</strong> Secure 5-10 "letter of intent" customers willing to trial service during Month 1 (before equipment purchase)</li>
                    <li><strong>Confirm Facility Suitability:</strong> Engineering assessment confirms space meets all requirements (power, floor loading, access)</li>
                    <li><strong>Financial Capacity:</strong> Owner comfortable with $250k-$300k total investment and 24-month runway without salary</li>
                    <li><strong>Time Commitment:</strong> Owner can dedicate 50-60 hours/week for first 12-18 months (critical for success)</li>
                    <li><strong>Supplier Relationships:</strong> Secure terms with 2 qualified EPS suppliers before equipment purchase</li>
                    <li><strong>Equipment Verification:</strong> Visit Wintech customer site, observe equipment in operation, verify claims</li>
                    <li><strong>Exit Strategy:</strong> Define clear metrics for "pull the plug" decision (e.g., <$15k revenue Month 6, <30 orders/month Month 9)</li>
                </ol>
            </div>

            <div class="threats">
                <h4>⚠️ Proceed Cautiously If:</h4>
                <ul>
                    <li><strong>Economic Downturn Indicators:</strong> Monitor RBA interest rate decisions, construction leading indicators. If recession signals strengthen, delay 6-12 months.</li>
                    <li><strong>Personal Risk Tolerance:</strong> This is a capital-intensive, slow-ramp business. If owner prefers lower risk, reconsider.</li>
                    <li><strong>Competitive Response Uncertainty:</strong> Major players may respond aggressively to new entrant. Need resilience for potential price pressure.</li>
                </ul>
            </div>

            <div class="weaknesses">
                <h4>❌ Do Not Proceed If:</h4>
                <ul>
                    <li>Unable to secure 5-10 initial customer commitments (indicates insufficient demand or value proposition)</li>
                    <li>Working capital insufficient (<$20k buffer beyond equipment purchase)</li>
                    <li>Owner cannot commit 50+ hours/week for first year</li>
                    <li>Facility requires >$50k in improvements to be suitable</li>
                    <li>Equipment cannot be financed or purchased outright</li>
                </ul>
            </div>
        </div>

        <!-- APPENDICES -->
        <h2 id="appendices" class="page-break">APPENDICES</h2>

        <div class="section">
            <h3>Appendix A: Data Sources & References</h3>

            <h4>Market Research & Statistics</h4>
            <ol>
                <li>Australian Bureau of Statistics (ABS) - Building Approvals, Australia (September 2025)</li>
                <li>Australian Construction Industry Forum (ACIF) - Market Conditions Report (2025)</li>
                <li>Mordor Intelligence - Australia Construction Market Report (2025-2030)</li>
                <li>Grand View Research - Expanded Polystyrene Market Analysis (2024-2033)</li>
                <li>Maximize Market Research - Global EPS Market Report (2024-2032)</li>
            </ol>

            <h4>Industry & Trade Organizations</h4>
            <ol start="6">
                <li>Expanded Polystyrene Australia (EPSA) - Industry standards and best practices</li>
                <li>Housing Industry Association (HIA) - Construction sector insights</li>
                <li>Master Builders Australia - Industry benchmarks</li>
                <li>NSW Environment Protection Authority (EPA) - Regulatory framework</li>
            </ol>

            <h4>Competitor Intelligence</h4>
            <ol start="10">
                <li>The Foam Company (thefoamcompany.com.au) - Products, pricing, capabilities</li>
                <li>Ausblox Pty Ltd (ausblox.com.au) - Sydney manufacturer information</li>
                <li>Foamex (foamex.com.au) - National manufacturer, 8 facilities</li>
                <li>Foam Sales (foamsales.com.au) - Australia-wide supplier</li>
                <li>Australian Custom Foam Cutting (foamforhome.com.au) - Regional competitor</li>
            </ol>

            <h4>Equipment & Technology</h4>
            <ol start="15">
                <li>Wintech Engineering (wintechengineering.com.au) - CNC foam cutting equipment</li>
                <li>Oncel CNC - Multi-wire foam cutting systems</li>
                <li>CNC-Multitool - European foam cutting technology</li>
            </ol>

            <h4>Economic & Financial Data</h4>
            <ol start="18">
                <li>Reserve Bank of Australia (RBA) - Competition and Profit Margins in Retail Trade</li>
                <li>Queensland Audit Office - Brisbane 2032 Olympics economic impact</li>
                <li>Infrastructure Australia - Major projects pipeline</li>
            </ol>

            <h4>Regulatory & Compliance</h4>
            <ol start="21">
                <li>NSW EPA - Expanded Polystyrene regulations and waste management</li>
                <li>SafeWork NSW - Workplace health and safety requirements</li>
                <li>Australian Standards (AS 1366.3) - EPS product specifications</li>
                <li>National Construction Code (NCC) 2025 - Building requirements</li>
            </ol>

            <h4>Location & Demographics</h4>
            <ol start="25">
                <li>Canterbury-Bankstown Council - Economic development data</li>
                <li>Georges River Council - Community profile</li>
                <li>economy.id - Business statistics by industry, Canterbury-Bankstown</li>
                <li>profile.id - Demographic and economic data</li>
            </ol>

            <p style="margin-top: 20px; font-style: italic; color: #64748b;">
                <strong>Note:</strong> All market sizing estimates and financial projections represent best estimates based on available data.
                Where specific data was unavailable, reasonable assumptions were made based on comparable markets, industry standards, and analyst judgment.
                Users should conduct their own verification and due diligence.
            </p>
        </div>

        <div class="section">
            <h3>Appendix B: Glossary of Terms</h3>

            <table class="financial-table">
                <thead>
                    <tr>
                        <th style="width: 30%;">Term</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>EPS (Expanded Polystyrene)</strong></td>
                        <td>Lightweight, rigid foam plastic material made from solid polystyrene beads, used for insulation, packaging, construction applications. Density range 13-30 kg/m³.</td>
                    </tr>
                    <tr>
                        <td><strong>XPS (Extruded Polystyrene)</strong></td>
                        <td>Higher-density polystyrene foam (typically 28-45 kg/m³), superior thermal insulation and compressive strength compared to EPS.</td>
                    </tr>
                    <tr>
                        <td><strong>CNC (Computer Numerical Control)</strong></td>
                        <td>Automated machine control via computer programming, enabling precision cutting with minimal manual intervention.</td>
                    </tr>
                    <tr>
                        <td><strong>Hot Wire Cutting</strong></td>
                        <td>Foam cutting method using electrically heated wire (typically 70V) to melt through material cleanly without mechanical pressure.</td>
                    </tr>
                    <tr>
                        <td><strong>COGS (Cost of Goods Sold)</strong></td>
                        <td>Direct costs attributable to production of goods sold, including materials and direct labor.</td>
                    </tr>
                    <tr>
                        <td><strong>CODB (Cost of Doing Business)</strong></td>
                        <td>Operating expenses including rent, utilities, administrative costs, marketing, insurance.</td>
                    </tr>
                    <tr>
                        <td><strong>TAM (Total Addressable Market)</strong></td>
                        <td>The total market demand for a product or service, representing the revenue opportunity if 100% market share achieved.</td>
                    </tr>
                    <tr>
                        <td><strong>Gross Margin</strong></td>
                        <td>(Revenue - COGS) / Revenue, expressed as percentage. Indicates profitability before operating expenses.</td>
                    </tr>
                    <tr>
                        <td><strong>Net Margin</strong></td>
                        <td>(Revenue - All Expenses) / Revenue, expressed as percentage. Bottom-line profitability metric.</td>
                    </tr>
                    <tr>
                        <td><strong>EBITDA</strong></td>
                        <td>Earnings Before Interest, Taxes, Depreciation, and Amortization. Cash flow proxy metric.</td>
                    </tr>
                    <tr>
                        <td><strong>R-Value</strong></td>
                        <td>Measure of thermal resistance used for insulation. Higher R-value = better insulation performance.</td>
                    </tr>
                    <tr>
                        <td><strong>CAGR (Compound Annual Growth Rate)</strong></td>
                        <td>Smoothed annual growth rate over multiple years.</td>
                    </tr>
                    <tr>
                        <td><strong>EPSA</strong></td>
                        <td>Expanded Polystyrene Australia, the national industry association for EPS manufacturers and distributors.</td>
                    </tr>
                    <tr>
                        <td><strong>AS 1366.3</strong></td>
                        <td>Australian Standard for rigid cellular plastics, specifying requirements for EPS products.</td>
                    </tr>
                    <tr>
                        <td><strong>BAS (Business Activity Statement)</strong></td>
                        <td>Australian tax reporting document lodged with ATO (quarterly or monthly) for GST, PAYG, etc.</td>
                    </tr>
                    <tr>
                        <td><strong>NPS (Net Promoter Score)</strong></td>
                        <td>Customer satisfaction metric measuring likelihood to recommend, scale -100 to +100.</td>
                    </tr>
                    <tr>
                        <td><strong>SKU (Stock Keeping Unit)</strong></td>
                        <td>Individual product or inventory item for tracking purposes.</td>
                    </tr>
                    <tr>
                        <td><strong>MOQ (Minimum Order Quantity)</strong></td>
                        <td>Smallest order size a supplier will accept.</td>
                    </tr>
                    <tr>
                        <td><strong>Geofoam</strong></td>
                        <td>EPS used as lightweight fill material in civil engineering applications (road embankments, etc.).</td>
                    </tr>
                    <tr>
                        <td><strong>SIPS (Structural Insulated Panels)</strong></td>
                        <td>Building panels with EPS core, used in energy-efficient construction.</td>
                    </tr>
                    <tr>
                        <td><strong>ICF (Insulated Concrete Forms)</strong></td>
                        <td>Formwork made from EPS that remains in place as permanent insulation for concrete structures.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Footer -->
        <div class="footer">
            <h3 style="color: #1e293b; margin-bottom: 12px;">EPS Foam Cutting Business</h3>
            <p style="font-size: 16px; margin-bottom: 8px;"><strong>Comprehensive Market Research Report</strong></p>
            <p style="margin-bottom: 8px;">Report Version: 2.0 | Prepared: November 2025</p>
            <p style="margin-bottom: 8px;">Classification: Business Confidential</p>
            <p style="margin-bottom: 8px;">Hurstville & Padstow, Sydney, NSW</p>
            <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                Built with Claude Code Dashboard | Generated: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
            <p style="margin-top: 8px; font-size: 13px;">
                <strong>Disclaimer:</strong> This report is based on publicly available information and industry research as of November 2025.
                Market conditions can change rapidly. Independent verification of all data and assumptions is recommended before making investment decisions.
                This report does not constitute financial or legal advice.
            </p>
        </div>
    </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'EPS_Foam_Business_Full_Report.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#ecfdf5',
            padding: '12px 24px',
            borderRadius: '12px',
            marginBottom: '16px',
            border: '2px solid #a7f3d0'
          }}>
            <CheckCircle size={24} color="#059669" />
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {executiveSummary.recommendation}
            </span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.2' }}>
            EPS Foam Cutting Business
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '800px' }}>
            Comprehensive market research analysis for launching an EPS foam cutting operation in Hurstville & Padstow, Sydney
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', fontSize: '14px', color: 'var(--text-tertiary)' }}>
            <span>📅 Prepared: {executiveSummary.prepared}</span>
            <span>•</span>
            <span>📄 Version: {executiveSummary.version}</span>
            <span>•</span>
            <span>🔒 Classification: Business Confidential</span>
          </div>
        </div>

        {/* Recommendation Card */}
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          borderRadius: '20px',
          padding: '40px',
          color: 'white',
          marginBottom: '32px',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <CheckCircle size={32} />
            </div>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', margin: 0 }}>
                Market Assessment
              </h2>
              <p style={{ fontSize: '16px', opacity: 0.9, margin: '4px 0 0 0' }}>
                {executiveSummary.classification}
              </p>
            </div>
          </div>
          <p style={{ fontSize: '18px', lineHeight: '1.7', opacity: 0.95, margin: '16px 0' }}>
            Based on synthesis of nine comprehensive AI-generated market research reports and current (2024-2025) market data,
            we recommend <strong>PROCEEDING</strong> with market entry. The analysis reveals strong construction sector growth
            (NSW building approvals +30.4%), clear service gaps in the market, strategic location advantages, and achievable
            financial returns with manageable risks.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.15)', padding: '16px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Target Break-Even</p>
              <p style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>18-24 months</p>
            </div>
            <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.15)', padding: '16px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Year 3 Net Margin</p>
              <p style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>25-35%</p>
            </div>
            <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.15)', padding: '16px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 4px 0' }}>Required Investment</p>
              <p style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>$180k-250k</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {executiveSummary.keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricCard
                label={metric.label}
                value={metric.value}
                icon={iconMap[metric.icon]}
                trend={metric.trend}
                color={index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'green' : 'orange'}
              />
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {/* Strengths */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title" style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={24} />
                Key Strengths
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'NSW construction recovery (+30.4% approvals)',
                'Owned premises ($30k-42k/yr savings)',
                'Strategic location (22.5% construction density)',
                'Clear service gaps (minimums, turnaround)',
                'Strong market fundamentals',
                'Proven equipment technology (Wintech)'
              ].map((item, idx) => (
                <li key={idx} style={{
                  padding: '12px 0',
                  borderBottom: idx < 5 ? '1px solid var(--border-light)' : 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10b981',
                    marginTop: '8px',
                    flexShrink: 0
                  }} />
                  <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risks to Monitor */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title" style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={24} />
                Risks to Monitor
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Customer acquisition (must hit 40+ orders/mo)',
                'Competitive response from incumbents',
                'Cash flow management (18-24 mo ramp)',
                'Material cost volatility (petroleum-linked)',
                'Economic downturn impact',
                'Owner time constraints (70+ hrs/week Year 1)'
              ].map((item, idx) => (
                <li key={idx} style={{
                  padding: '12px 0',
                  borderBottom: idx < 5 ? '1px solid var(--border-light)' : 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#ef4444',
                    marginTop: '8px',
                    flexShrink: 0
                  }} />
                  <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '32px',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '16px',
          padding: '32px',
          border: '2px solid #bfdbfe',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>
            Next Steps
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
            Review detailed sections on market analysis, financial projections, and operational planning to make an informed decision.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/market-analysis')}
              style={{
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.3)';
              }}
            >
              View Market Analysis
            </button>
            <button
              className="btn btn-outline"
              onClick={downloadFullReport}
              style={{
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: '600',
                background: 'white',
                color: '#3b82f6',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f0f9ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={20} />
              Download Full Report
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExecutiveSummary;
