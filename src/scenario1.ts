// Singleton

class GameSettings {
  // On stocke de manière statique une instance de notre class GameSettings
  private static instance: GameSettings;

  // Les paramètres de notre jeu qu'on stocke dans un dictionnaire
  private settings: Record<string, string> = {};

  // Important : rendre le constructeur privé pour empêcher la création de nouvelles instances
  private constructor() {}

  // Une méthode statique qui permet de récupérer l'instance unique de notre classe
  // C'est la seule manière d'accéder à l'instance de la classe
  // C'est aussi sa responsabilité de créer l'instance unique
  static getInstance(): GameSettings {
    if (!GameSettings.instance) {
      GameSettings.instance = new GameSettings();
    }

    return GameSettings.instance;
  }

  setValue(key: string, value: string) {
    this.settings[key] = value;
  }

  getValue(key: string) {
    return this.settings[key];
  }
}

const settings1 = GameSettings.getInstance();

settings1.setValue("volume", "50");
settings1.setValue("language", "fr");

// Dans un autre endroit de notre appplication

const settings2 = GameSettings.getInstance();

console.log(settings2);
