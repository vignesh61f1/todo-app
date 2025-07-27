import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.primary} style={settingsStyles.settingIcon}>
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
