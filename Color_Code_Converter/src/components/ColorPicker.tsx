import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Copy, Check, Palette } from "lucide-react";
import { findClosestPantone, hexToRgb, rgbToHex } from "../utils/pantone-colors";

export function ColorPicker() {
  const [color, setColor] = useState("#FF6B9D");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const rgb = hexToRgb(color);
  const pantone = findClosestPantone(color);
  
  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
  };
  
  const handleRgbChange = (channel: 'r' | 'g' | 'b', value: string) => {
    const numValue = Math.min(255, Math.max(0, parseInt(value) || 0));
    const newRgb = { ...rgb, [channel]: numValue };
    setColor(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 relative z-10">
      <div className="text-center space-y-3 mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Palette className="w-10 h-10 text-primary" />
          <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-[32px] font-bold font-[Manjari]">
            Selector de Códigos de Color
          </h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selecciona un color y obtén sus códigos HEX, RGB y Pantone equivalente
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Color Selector */}
        <Card className="border-primary/20 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow">
          <CardHeader>
            <CardTitle>Selecciona tu Color</CardTitle>
            <CardDescription>
              Usa el selector o ingresa un código hexadecimal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="color-input">Color Picker</Label>
              <div className="flex gap-3">
                <input
                  id="color-input"
                  type="color"
                  value={color}
                  onChange={handleInputChange}
                  className="w-20 h-20 rounded-2xl cursor-pointer border-4 border-primary/30 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
                />
                <div className="flex-1 space-y-2">
                  <Input
                    type="text"
                    value={color}
                    onChange={handleInputChange}
                    placeholder="#FFFFFF"
                    className="uppercase"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label htmlFor="r-input" className="text-sm">R</Label>
                      <Input
                        id="r-input"
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.r}
                        onChange={(e) => handleRgbChange('r', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="g-input" className="text-sm">G</Label>
                      <Input
                        id="g-input"
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.g}
                        onChange={(e) => handleRgbChange('g', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="b-input" className="text-sm">B</Label>
                      <Input
                        id="b-input"
                        type="number"
                        min="0"
                        max="255"
                        value={rgb.b}
                        onChange={(e) => handleRgbChange('b', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Vista Previa</Label>
              <div
                className="w-full h-32 rounded-2xl border-4 border-primary/30 shadow-xl shadow-primary/20 relative overflow-hidden group"
                style={{ backgroundColor: color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Color Codes */}
        <Card className="border-secondary/20 shadow-lg shadow-secondary/5 hover:shadow-secondary/10 transition-shadow">
          <CardHeader>
            <CardTitle>Códigos de Color</CardTitle>
            <CardDescription>
              Copia los valores en diferentes formatos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* HEX */}
            <div className="space-y-2">
              <Label>Código Hexadecimal (HEX)</Label>
              <div className="flex gap-2">
                <Input value={color.toUpperCase()} readOnly className="flex-1" />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => copyToClipboard(color.toUpperCase(), 'hex')}
                >
                  {copiedField === 'hex' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            
            {/* RGB */}
            <div className="space-y-2">
              <Label>RGB</Label>
              <div className="flex gap-2">
                <Input
                  value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                  readOnly
                  className="flex-1"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'rgb')}
                >
                  {copiedField === 'rgb' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="flex gap-2">
                <Input
                  value={`${rgb.r}, ${rgb.g}, ${rgb.b}`}
                  readOnly
                  className="flex-1"
                />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => copyToClipboard(`${rgb.r}, ${rgb.g}, ${rgb.b}`, 'rgb-values')}
                >
                  {copiedField === 'rgb-values' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            
            {/* Pantone */}
            <div className="space-y-2">
              <Label>Pantone Más Cercano</Label>
              <div className="flex gap-2">
                <Input value={pantone.name} readOnly className="flex-1" />
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => copyToClipboard(pantone.name, 'pantone')}
                >
                  {copiedField === 'pantone' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="flex gap-3 p-4 rounded-xl bg-muted/50 border border-primary/10">
                <div
                  className="w-12 h-12 rounded-xl border-2 border-primary/30 shadow-md"
                  style={{ backgroundColor: pantone.hex }}
                />
                <div className="flex-1 space-y-1">
                  <p className="text-sm">{pantone.hex}</p>
                  <p className="text-xs text-muted-foreground">
                    RGB: {pantone.rgb.r}, {pantone.rgb.g}, {pantone.rgb.b}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Info */}
      <Card className="border-accent/20 shadow-lg shadow-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
            Información
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Esta herramienta convierte colores a sus equivalentes Pantone más cercanos usando un algoritmo 
            de distancia euclidiana en el espacio RGB. Ten en cuenta que la coincidencia es aproximada y 
            puede variar según el dispositivo de visualización. Para trabajos de impresión profesional, 
            siempre verifica los colores Pantone con las guías oficiales de color Pantone.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
