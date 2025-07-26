#!/usr/bin/env python3
"""
测试重构后的架构
"""

import sys
import os
import asyncio

# 添加当前目录到 Python 路径
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from agents.main_agent import MainAgent

async def test_main_agent():
    """测试 Main Agent"""
    print("🧪 测试 Main Agent 架构...")
    
    main_agent = MainAgent()
    
    # 测试用例
    test_cases = [
        "你好",
        "打开计算器",
        "播放音乐"
    ]
    
    for test_input in test_cases:
        print(f"\n👤 测试输入: {test_input}")
        try:
            response = await main_agent.process_message(test_input)
            print(f"🤖 AI回复: {response}")
        except Exception as e:
            print(f"❌ 错误: {e}")
        print("-" * 50)

if __name__ == "__main__":
    asyncio.run(test_main_agent())