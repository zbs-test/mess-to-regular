# 安装openssh-server
# next
```bash
systemctl enable ssh
systemctl start ssh
```
# 连接前
```bash
ip a #get inet4
```
# 连接,其他终端
```bash
ssh [remote username]@[ip_address]
```
