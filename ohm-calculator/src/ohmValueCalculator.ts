import  OhmValueCalculator from './IOhmValueCalculator';
import { ACOLORS } from './mockStyles';
import { BCOLORS } from './mockStyles';
import { CCOLORS } from './mockStyles';
import { DCOLORS } from './mockStyles';
import { PNAMES } from './mockStyles';

export default class OhmCalculator implements OhmValueCalculator {
    
    /// Private members
    private _maxResist: number;
    private _minResist: number;
    private _resistance: number;
    private _style: string;
    
    /// Calculates resistance value based upon supplied band colors
    public CalculateOhmValue(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number {
        var resist: number = 0;

        try {

            var aColor = ACOLORS.find(x => x.name === bandAColor).value;
            var bColor = BCOLORS.find(x => x.name === bandBColor).value;
            var cColor = CCOLORS.find(x => x.name === bandCColor).value;
            
            resist = Number((+(aColor.toString() + bColor.toString()) * cColor).toFixed(2)); 

        } catch (e) {
            throw (e);
            
        }
        
        this._resistance = resist;

        return this._resistance;
    }

    /// Calculates minimum resistance based upon band colors and tolerance value
    public CalculateMinResist(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number {
        
        var minResist: number = 0;

        try {

            var aColor = ACOLORS.find(x => x.name === bandAColor).value;
            var bColor = BCOLORS.find(x => x.name === bandBColor).value;
            var cColor = CCOLORS.find(x => x.name === bandCColor).value;
            var dColor = DCOLORS.find(x => x.name === bandDColor).value;
            minResist = Number(((+(aColor.toString() + bColor.toString()) * cColor) -
            ((+(aColor.toString() + bColor.toString()) * cColor) * dColor)).toFixed(2)); 

        } catch (e) {
           throw (e);
            
        }
        
        this._minResist = minResist;

        return this._minResist;
    }

    /// Calculates minimum resistance based upon band colors and tolerance value
    public CalculateMaxResist(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number {
        
        var maxResist: number = 0;

        try {

            var aColor = ACOLORS.find(x => x.name === bandAColor).value;
            var bColor = BCOLORS.find(x => x.name === bandBColor).value;
            var cColor = CCOLORS.find(x => x.name === bandCColor).value;
            var dColor = DCOLORS.find(x => x.name === bandDColor).value;
            maxResist = Number(((+(aColor.toString() + bColor.toString()) * cColor) +
            ((+(aColor.toString() + bColor.toString()) * cColor) * dColor)).toFixed(2)); 

        } catch (e) {
           throw (e);
            
        }
        
        this._maxResist = maxResist;
        
        return this._maxResist;
    }

    /// Retrieves corresponding css style 
    public GetStyle(bandColor: string): string {
        var style: string;

        try {
            style = PNAMES.find(x => x.name === bandColor).value;

        } catch (e) {
            throw (e);

        }

        this._style = style;
        return this._style;
    }
}
