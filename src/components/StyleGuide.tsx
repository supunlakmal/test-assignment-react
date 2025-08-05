'use client';

import React, { useState } from 'react';

interface ColorSwatchProps {
  name: string;
  value: string;
  textColor: string;
  description?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, textColor, description }) => (
  <div className="flex flex-col">
    <div 
      className="w-16 h-28 flex items-end justify-center pb-2"
      style={{ backgroundColor: value }}
    >
      <span 
        className="text-base font-medium font-roboto leading-normal tracking-tight"
        style={{ color: textColor }}
      >
        {name}
      </span>
    </div>
    {description && (
      <span className="text-sm text-center mt-1 font-roboto">{description}</span>
    )}
  </div>
);

const TonalPalette: React.FC<{ title: string; colors: Array<{ tone: string; hex: string; textColor: string }> }> = ({ title, colors }) => (
  <div className="mb-8">
    <h3 className="text-base font-medium font-roboto mb-4 text-on-surface">{title}</h3>
    <div className="flex gap-2 flex-wrap">
      {colors.map(({ tone, hex, textColor }) => (
        <ColorSwatch
          key={tone}
          name={tone}
          value={hex}
          textColor={textColor}
        />
      ))}
    </div>
  </div>
);

const SemanticColorDemo: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`w-full h-[830px] relative ${isDark ? 'bg-neutral-10' : 'bg-neutral-99'} p-4`}>
      <div className="text-base font-medium font-roboto mb-6 text-on-background">
        {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
      </div>
      
      {/* Primary Row */}
      <div className="flex gap-0 mb-4">
        <div className={`w-52 h-28 ${isDark ? 'bg-primary-80' : 'bg-primary-40'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-primary">Primary</span>
          <span className="text-sm font-medium font-roboto text-on-primary text-right">
            Primary{isDark ? '80' : '40'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-primary-20' : 'bg-primary-100'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-primary">On Primary</span>
          <span className="text-sm font-medium font-roboto text-on-primary text-right">
            Primary{isDark ? '20' : '100'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-primary-30' : 'bg-primary-90'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-primary-container">Primary Container</span>
          <span className="text-sm font-medium font-roboto text-on-primary-container text-right">
            Primary{isDark ? '30' : '90'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-primary-90' : 'bg-primary-10'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-primary-container">On Primary Container</span>
          <span className="text-sm font-medium font-roboto text-on-primary-container text-right">
            Primary{isDark ? '90' : '10'}
          </span>
        </div>
      </div>

      {/* Secondary Row */}
      <div className="flex gap-0 mb-4">
        <div className={`w-52 h-28 ${isDark ? 'bg-secondary-80' : 'bg-secondary-40'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-secondary">Secondary</span>
          <span className="text-sm font-medium font-roboto text-on-secondary text-right">
            Secondary{isDark ? '80' : '40'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-secondary-20' : 'bg-secondary-100'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-secondary">On Secondary</span>
          <span className="text-sm font-medium font-roboto text-on-secondary text-right">
            Secondary{isDark ? '20' : '100'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-secondary-30' : 'bg-secondary-90'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-secondary-container">Secondary Container</span>
          <span className="text-sm font-medium font-roboto text-on-secondary-container text-right">
            Secondary{isDark ? '30' : '90'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-secondary-90' : 'bg-secondary-10'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-secondary-container">On Secondary Container</span>
          <span className="text-sm font-medium font-roboto text-on-secondary-container text-right">
            Secondary{isDark ? '90' : '10'}
          </span>
        </div>
      </div>

      {/* Surface and Background Row */}
      <div className="flex gap-0 mb-4">
        <div className={`w-52 h-28 ${isDark ? 'bg-neutral-10' : 'bg-neutral-99'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-background">Background</span>
          <span className="text-sm font-medium font-roboto text-on-background text-right">
            Neutral{isDark ? '10' : '99'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-neutral-90' : 'bg-neutral-10'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-background">On Background</span>
          <span className="text-sm font-medium font-roboto text-on-background text-right">
            Neutral{isDark ? '90' : '10'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-neutral-10' : 'bg-neutral-99'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface</span>
          <span className="text-sm font-medium font-roboto text-on-surface text-right">
            Neutral{isDark ? '10' : '99'}
          </span>
        </div>
        <div className={`w-52 h-28 ${isDark ? 'bg-neutral-90' : 'bg-neutral-10'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">On Surface</span>
          <span className="text-sm font-medium font-roboto text-on-surface text-right">
            Neutral{isDark ? '90' : '10'}
          </span>
        </div>
      </div>
    </div>
  );
};

const SurfaceElevation: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`w-52 h-[828px] relative ${isDark ? 'bg-neutral-0' : 'bg-neutral-99'} p-4`}>
      <div className="text-base font-medium font-roboto mb-6 text-on-surface">
        Surfaces - {theme === 'light' ? 'Light' : 'Dark'}
      </div>
      
      <div className="space-y-4">
        <div className={`w-full h-28 ${isDark ? 'bg-neutral-10' : 'bg-neutral-99'} flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface</span>
        </div>
        
        <div className={`w-full h-28 bg-surface-1 flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface at +1</span>
          <span className="text-sm font-medium font-roboto text-on-surface">+ 5% Primary</span>
        </div>
        
        <div className={`w-full h-28 bg-surface-2 flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface at +2</span>
          <span className="text-sm font-medium font-roboto text-on-surface">+ 8% Primary</span>
        </div>
        
        <div className={`w-full h-28 bg-surface-3 flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface at +3</span>
          <span className="text-sm font-medium font-roboto text-on-surface">+ 11% Primary</span>
        </div>
        
        <div className={`w-full h-28 bg-surface-4 flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface at +4</span>
          <span className="text-sm font-medium font-roboto text-on-surface">+ 12% Primary</span>
        </div>
        
        <div className={`w-full h-28 bg-surface-5 flex flex-col justify-between p-3`}>
          <span className="text-sm font-medium font-roboto text-on-surface">Surface at +5</span>
          <span className="text-sm font-medium font-roboto text-on-surface">+ 14% Primary</span>
        </div>
      </div>
    </div>
  );
};

const StyleGuide: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const primaryColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#21005D', textColor: '#FFFFFF' },
    { tone: '20', hex: '#371E73', textColor: '#FFFFFF' },
    { tone: '30', hex: '#4F378B', textColor: '#FFFFFF' },
    { tone: '40', hex: '#6750A4', textColor: '#FFFFFF' },
    { tone: '50', hex: '#7F67BE', textColor: '#FFFFFF' },
    { tone: '60', hex: '#9A82DB', textColor: '#000000' },
    { tone: '70', hex: '#B69DF8', textColor: '#000000' },
    { tone: '80', hex: '#D0BCFF', textColor: '#000000' },
    { tone: '90', hex: '#EADDFF', textColor: '#000000' },
    { tone: '95', hex: '#F6EDFF', textColor: '#000000' },
    { tone: '99', hex: '#FFFBFE', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  const secondaryColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#1D192B', textColor: '#FFFFFF' },
    { tone: '20', hex: '#332D41', textColor: '#FFFFFF' },
    { tone: '30', hex: '#4A4458', textColor: '#FFFFFF' },
    { tone: '40', hex: '#625B71', textColor: '#FFFFFF' },
    { tone: '50', hex: '#7A7289', textColor: '#FFFFFF' },
    { tone: '60', hex: '#958DA5', textColor: '#000000' },
    { tone: '70', hex: '#B0A7C0', textColor: '#000000' },
    { tone: '80', hex: '#CCC2DC', textColor: '#000000' },
    { tone: '90', hex: '#E8DEF8', textColor: '#000000' },
    { tone: '95', hex: '#F6EDFF', textColor: '#000000' },
    { tone: '99', hex: '#FFFBFE', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  const tertiaryColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#31111D', textColor: '#FFFFFF' },
    { tone: '20', hex: '#492532', textColor: '#FFFFFF' },
    { tone: '30', hex: '#633B48', textColor: '#FFFFFF' },
    { tone: '40', hex: '#7D5260', textColor: '#FFFFFF' },
    { tone: '50', hex: '#986977', textColor: '#FFFFFF' },
    { tone: '60', hex: '#B58392', textColor: '#000000' },
    { tone: '70', hex: '#D29DAC', textColor: '#000000' },
    { tone: '80', hex: '#EFB8C8', textColor: '#000000' },
    { tone: '90', hex: '#FFD8E4', textColor: '#000000' },
    { tone: '95', hex: '#FFECF1', textColor: '#000000' },
    { tone: '99', hex: '#FFFBFA', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  const errorColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#410E0B', textColor: '#FFFFFF' },
    { tone: '20', hex: '#601410', textColor: '#FFFFFF' },
    { tone: '30', hex: '#8C1D18', textColor: '#FFFFFF' },
    { tone: '40', hex: '#B3261E', textColor: '#FFFFFF' },
    { tone: '50', hex: '#DC362E', textColor: '#FFFFFF' },
    { tone: '60', hex: '#E46962', textColor: '#000000' },
    { tone: '70', hex: '#EC928E', textColor: '#000000' },
    { tone: '80', hex: '#F2B8B5', textColor: '#000000' },
    { tone: '90', hex: '#F9DEDC', textColor: '#000000' },
    { tone: '95', hex: '#FCEEEE', textColor: '#000000' },
    { tone: '99', hex: '#FFFBF9', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  const neutralColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#1C1B1F', textColor: '#FFFFFF' },
    { tone: '20', hex: '#313033', textColor: '#FFFFFF' },
    { tone: '30', hex: '#484649', textColor: '#FFFFFF' },
    { tone: '40', hex: '#605D62', textColor: '#FFFFFF' },
    { tone: '50', hex: '#787579', textColor: '#FFFFFF' },
    { tone: '60', hex: '#939094', textColor: '#000000' },
    { tone: '70', hex: '#AEAAAE', textColor: '#000000' },
    { tone: '80', hex: '#CAC4D0', textColor: '#000000' },
    { tone: '90', hex: '#E6E0E9', textColor: '#000000' },
    { tone: '95', hex: '#F3EDF7', textColor: '#000000' },
    { tone: '99', hex: '#FFFBFE', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  const neutralVariantColors = [
    { tone: '0', hex: '#000000', textColor: '#FFFFFF' },
    { tone: '10', hex: '#1D1A22', textColor: '#FFFFFF' },
    { tone: '20', hex: '#322F37', textColor: '#FFFFFF' },
    { tone: '30', hex: '#49454F', textColor: '#FFFFFF' },
    { tone: '40', hex: '#605D66', textColor: '#FFFFFF' },
    { tone: '50', hex: '#79747E', textColor: '#FFFFFF' },
    { tone: '60', hex: '#938F99', textColor: '#000000' },
    { tone: '70', hex: '#AEA9B4', textColor: '#000000' },
    { tone: '80', hex: '#CAC4CF', textColor: '#000000' },
    { tone: '90', hex: '#E7E0EC', textColor: '#000000' },
    { tone: '95', hex: '#F5EEFA', textColor: '#000000' },
    { tone: '99', hex: '#FFFBFE', textColor: '#000000' },
    { tone: '100', hex: '#FFFFFF', textColor: '#000000' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background font-roboto">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-on-background">Material Design 3 Style Guide</h1>
          <button
            onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 bg-primary-40 text-on-primary rounded-lg font-medium"
          >
            Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>

        {/* Tonal Palettes Section */}
        <section className="mb-12">
          <div className="p-16 bg-neutral-0 rounded-lg inline-flex flex-col gap-8">
            <div className="text-base font-medium font-roboto text-white">Tonal Palettes</div>
            
            <TonalPalette title="Primary" colors={primaryColors} />
            <TonalPalette title="Secondary" colors={secondaryColors} />
            <TonalPalette title="Tertiary" colors={tertiaryColors} />
            <TonalPalette title="Error" colors={errorColors} />
            <TonalPalette title="Neutral" colors={neutralColors} />
            <TonalPalette title="Neutral Variant" colors={neutralVariantColors} />
          </div>
        </section>

        {/* Theme Examples Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-on-background">Theme Examples</h2>
          <div className="flex gap-8 overflow-x-auto">
            <SemanticColorDemo theme="light" />
            <SemanticColorDemo theme="dark" />
            <SurfaceElevation theme="light" />
            <SurfaceElevation theme="dark" />
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-on-background">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-container p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-on-surface">Color Classes</h3>
              <p className="text-on-surface-variant mb-3">
                Use semantic color names for better maintainability:
              </p>
              <code className="bg-surface-container-high p-2 rounded text-sm block">
                bg-primary-40 text-on-primary
              </code>
            </div>
            
            <div className="bg-surface-container p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-on-surface">Surface Elevation</h3>
              <p className="text-on-surface-variant mb-3">
                Apply surface elevation for depth:
              </p>
              <code className="bg-surface-container-high p-2 rounded text-sm block">
                bg-surface-2 shadow-elevation-2
              </code>
            </div>
            
            <div className="bg-surface-container p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-on-surface">Dark Mode</h3>
              <p className="text-on-surface-variant mb-3">
                Dark mode variants are automatically applied:
              </p>
              <code className="bg-surface-container-high p-2 rounded text-sm block">
                dark:bg-primary-80 dark:text-on-primary
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StyleGuide;