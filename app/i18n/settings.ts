import flag_us from '/public/flag-us.png'
import flag_br from '/public/flag-br.png'

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'pt']
export const langFlags = [flag_us, flag_br]
export const defaultNS = 'translation'

export function getOptions(lng: string = fallbackLng, ns: string = defaultNS)
{
    return {
        // debug: true
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}