import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import { WebView } from 'react-native-webview';

const API_KEY = 'AIzaSyBPr8nXEkpuVrtlL2thkl_aU9QcSqahMZ4'; // Replace with your YouTube Data API key
const PLAYLIST_ID = 'PLBaMzOrsqnODi40XsIOwoFVNxcaY8-XGh'; // Replace with the actual playlist ID

const Stockmarket: React.FC = () => {
  const [progress, setProgress] = useState(0.25);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=3`
        );
        console.log('API Response:', response.data);
        const urls = response.data.items.map((item: any) => `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`);
        console.log('Video URLs:', urls);
        setVideoUrls(urls);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data);
        } else {
          console.error('Error:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const increaseProgress = () => {
    if (progress < 1) {
      setProgress(progress + 0.25);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Stock Market Trading Basics</Text>

      <Text style={styles.subtitle}>Introduction to Stock Trading</Text>
      <Text style={styles.content}>
        Stock trading involves buying and selling shares of publicly traded companies. It is a critical component of the financial market, allowing companies to raise capital and investors to gain potential returns. The process includes placing buy or sell orders, managing portfolios, and analyzing market trends. Understanding how stock markets operate can help you make informed decisions and strategize your investments effectively. The ability to read and interpret financial news and reports is also crucial for successful trading.
      </Text>
      <Image
        source={{ uri: 'https://www.example.com/stock-market-intro.jpg' }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>Understanding Stock Market Indicators</Text>
      <Text style={styles.content}>
        1. Price-Earnings Ratio (P/E): A key indicator of a stock's valuation, showing the relationship between the company's earnings and its stock price. A high P/E ratio may indicate that the stock is overvalued, while a low P/E ratio could suggest that it is undervalued.
      </Text>
      <Text style={styles.content}>
        2. Moving Averages: A technical analysis tool that smooths out price data to identify trends over time. Moving averages help traders to filter out the noise from random price fluctuations and identify the underlying trend of the market.
      </Text>
      <Text style={styles.content}>
        3. Volume: The number of shares traded in a specific time period, reflecting the strength of a market movement. High trading volume can signal the beginning of a new trend, while low volume might indicate a potential reversal or lack of interest.
      </Text>
      <Text style={styles.content}>
        4. Relative Strength Index (RSI): A momentum oscillator that measures the speed and change of price movements. RSI values range from 0 to 100 and are used to identify overbought or oversold conditions in a market.
      </Text>
      <Text style={styles.content}>
        5. Bollinger Bands: A volatility indicator that consists of a middle band (a moving average) and two outer bands (standard deviations away from the middle band). Bollinger Bands help to determine overbought or oversold conditions and identify potential breakouts.
      </Text>

      {loading ? (
        <Text style={styles.content}>Loading videos...</Text>
      ) : videoUrls.length > 0 ? (
        videoUrls.map((url, index) => (
          <View key={index} style={styles.videoContainer}>
            <WebView
              source={{ uri: url }}
              style={styles.video}
            />
          </View>
        ))
      ) : (
        <Text style={styles.content}>No videos found.</Text>
      )}

      <Text style={styles.subtitle}>Tips for Successful Stock Trading</Text>
      <Text style={styles.content}>
        1. Research: Always research the companies and industries you are interested in before making a trade. This includes analyzing financial statements, understanding market conditions, and staying updated with relevant news.
      </Text>
      <Text style={styles.content}>
        2. Diversify: Spread your investments across different sectors to mitigate risk. Diversification helps to protect your portfolio from significant losses due to poor performance in a single sector or asset.
      </Text>
      <Text style={styles.content}>
        3. Set Goals: Define your investment goals and develop a strategy that aligns with them. Whether you are aiming for long-term growth, short-term gains, or income generation, having clear objectives will guide your trading decisions.
      </Text>
      <Text style={styles.content}>
        4. Monitor Market Trends: Regularly track market trends and economic indicators that may impact stock performance. Staying informed will help you make timely decisions and adjust your strategy as needed.
      </Text>
      <Text style={styles.content}>
        5. Manage Risk: Use stop-loss orders and position sizing to manage risk. Effective risk management helps to minimize potential losses and protect your capital from unexpected market movements.
      </Text>

      <TouchableOpacity style={styles.button} onPress={increaseProgress}>
        <Text style={styles.buttonText}>Next Lesson</Text>
      </TouchableOpacity>

      <Text style={styles.progressText}>Course Progress:</Text>
      <Progress.Bar progress={progress} width={null} color="#1E90FF" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
});

export default Stockmarket;
