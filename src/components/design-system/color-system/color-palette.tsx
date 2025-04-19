import React from "react";
import { cn } from "@/lib/utils";

interface ColorProps {
  colorName: string;
  shade: string;
  hex: string;
  className?: string;
}

const Color: React.FC<ColorProps> = ({ colorName, shade, hex, className }) => {
  const getTextColor = (hexColor: string) => {
    let r = 0,
      g = 0,
      b = 0;
    if (hexColor.length === 4) {
      r = parseInt(hexColor[1] + hexColor[1], 16);
      g = parseInt(hexColor[2] + hexColor[2], 16);
      b = parseInt(hexColor[3] + hexColor[3], 16);
    } else if (hexColor.length === 7) {
      r = parseInt(hexColor.substring(1, 3), 16);
      g = parseInt(hexColor.substring(3, 5), 16);
      b = parseInt(hexColor.substring(5, 7), 16);
    }
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "text-black" : "text-white";
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div
        className={cn(
          "h-20 rounded-t-md flex items-end p-2",
          getTextColor(hex)
        )}
        style={{ backgroundColor: hex }}
      >
        <div className="text-xs font-medium">{shade}</div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-2 rounded-b-md border-t-0 border border-neutral-200 dark:border-neutral-700">
        <div className="text-xs font-medium truncate">{colorName}</div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-1">
          {hex}
        </div>
      </div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  colors: {
    name: string;
    shade: string;
    hex: string;
  }[];
  className?: string;
}

const ColorGroup: React.FC<ColorGroupProps> = ({
  title,
  colors,
  className,
}) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {colors.map((color) => (
          <Color
            key={`${color.name}-${color.shade}`}
            colorName={color.name}
            shade={color.shade}
            hex={color.hex}
          />
        ))}
      </div>
    </div>
  );
};

interface ColorPaletteProps {
  className?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ className }) => {
  const colorGroups = [
    {
      title: "Primary Colors",
      colors: [
        { name: "Primary", shade: "50", hex: "#EEF2FF" },
        { name: "Primary", shade: "100", hex: "#E0E7FF" },
        { name: "Primary", shade: "200", hex: "#C7D2FE" },
        { name: "Primary", shade: "300", hex: "#A5B4FC" },
        { name: "Primary", shade: "400", hex: "#818CF8" },
        { name: "Primary", shade: "500", hex: "#4F46E5" },
        { name: "Primary", shade: "600", hex: "#4338CA" },
        { name: "Primary", shade: "700", hex: "#3730A3" },
        { name: "Primary", shade: "800", hex: "#312E81" },
        { name: "Primary", shade: "900", hex: "#24225A" },
      ],
    },
    {
      title: "Secondary Colors",
      colors: [
        { name: "Secondary", shade: "50", hex: "#ECFDFF" },
        { name: "Secondary", shade: "100", hex: "#CFF9FE" },
        { name: "Secondary", shade: "200", hex: "#A5F0FC" },
        { name: "Secondary", shade: "300", hex: "#67E3F9" },
        { name: "Secondary", shade: "400", hex: "#22CCDE" },
        { name: "Secondary", shade: "500", hex: "#06B6D4" },
        { name: "Secondary", shade: "600", hex: "#0891B2" },
        { name: "Secondary", shade: "700", hex: "#0E7490" },
        { name: "Secondary", shade: "800", hex: "#155E75" },
        { name: "Secondary", shade: "900", hex: "#164E63" },
      ],
    },
    {
      title: "Tertiary Colors",
      colors: [
        { name: "Tertiary", shade: "50", hex: "#F5F3FF" },
        { name: "Tertiary", shade: "100", hex: "#EDE9FE" },
        { name: "Tertiary", shade: "200", hex: "#DDD6FE" },
        { name: "Tertiary", shade: "300", hex: "#C4B5FD" },
        { name: "Tertiary", shade: "400", hex: "#A78BFA" },
        { name: "Tertiary", shade: "500", hex: "#8B5CF6" },
        { name: "Tertiary", shade: "600", hex: "#7C3AED" },
        { name: "Tertiary", shade: "700", hex: "#6D28D9" },
        { name: "Tertiary", shade: "800", hex: "#5B21B6" },
        { name: "Tertiary", shade: "900", hex: "#4C1D95" },
      ],
    },
    {
      title: "Neutral Colors",
      colors: [
        { name: "Neutral", shade: "50", hex: "#FAFAFA" },
        { name: "Neutral", shade: "100", hex: "#F4F4F5" },
        { name: "Neutral", shade: "200", hex: "#E4E4E7" },
        { name: "Neutral", shade: "300", hex: "#D4D4D8" },
        { name: "Neutral", shade: "400", hex: "#A1A1AA" },
        { name: "Neutral", shade: "500", hex: "#71717A" },
        { name: "Neutral", shade: "600", hex: "#52525B" },
        { name: "Neutral", shade: "700", hex: "#3F3F46" },
        { name: "Neutral", shade: "800", hex: "#27272A" },
        { name: "Neutral", shade: "900", hex: "#18181B" },
      ],
    },
    {
      title: "Semantic Colors",
      colors: [
        { name: "Success", shade: "500", hex: "#10B981" },
        { name: "Info", shade: "500", hex: "#3B82F6" },
        { name: "Warning", shade: "500", hex: "#F59E0B" },
        { name: "Error", shade: "500", hex: "#EF4444" },
        { name: "Surface", shade: "1", hex: "#F8FAFC" },
      ],
    },
  ];

  return (
    <div className={cn("space-y-8", className)}>
      {colorGroups.map((group) => (
        <ColorGroup
          key={group.title}
          title={group.title}
          colors={group.colors}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
