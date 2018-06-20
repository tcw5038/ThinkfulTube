'use strict';
/* global $ */
const API_KEY = 'AIzaSyBEOcrEzcMtbggREKaYFFajoNVKC6eGmD0';
const mockData = 
  {
    'kind': 'youtube#searchListResponse',
    'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/QGvkBt0EqhOzdgMJRwG-6OCuKo8"',
    'nextPageToken': 'CBkQAA',
    'regionCode': 'US',
    'pageInfo': {
      'totalResults': 1000000,
      'resultsPerPage': 25
    },
    'items': [
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VsO_7VLK7pycCIK2tpNA79hdqtY"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'MfzWXPZAak0'
        },
        'snippet': {
          'publishedAt': '2018-06-17T17:46:44.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Germany vs. Mexico | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Germany vs. Mexico in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/MfzWXPZAak0/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/MfzWXPZAak0/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/MfzWXPZAak0/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/s9PcsPvwkkdtSM3p1h274b5NMwU"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'AqXgdUdFJqc'
        },
        'snippet': {
          'publishedAt': '2018-06-17T15:53:06.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': 'Hirving Lozano gives Mexico the 1-0 lead over Germany | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch Hirving Lozano\'s goal for Mexico against Germany in the 2018 FIFA World Cup™. SUBSCRIBE to get the latest FOX Soccer content: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/AqXgdUdFJqc/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/AqXgdUdFJqc/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/AqXgdUdFJqc/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/BzHvV8WV8t9531ZbbZaQEYPHMzg"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '2jTLRoeUl1E'
        },
        'snippet': {
          'publishedAt': '2018-06-17T20:32:41.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Brazil vs. Switzerland | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Brazil vs. Switzerland in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/2jTLRoeUl1E/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/2jTLRoeUl1E/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/2jTLRoeUl1E/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/oMAs3FNwNRfy_DYrTHLvrP4gZrY"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'Fip60Qmajso'
        },
        'snippet': {
          'publishedAt': '2018-06-16T15:30:56.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Argentina vs. Iceland | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Argentina vs. Iceland in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Fip60Qmajso/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Fip60Qmajso/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Fip60Qmajso/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/HckvtDMzaJ1C7DVbWyqKCZ0hagQ"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '3dWrKNrWbWQ'
        },
        'snippet': {
          'publishedAt': '2018-06-17T20:35:39.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Brazil v Switzerland - 2018 FIFA World Cup Russia™ - Match 9',
          'description': 'Coutinho had given Brazil the lead with a stunning strike Zuber equalised with a close-range header Find out where to watch live: fifa.tv/watch2018 More match ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/3dWrKNrWbWQ/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/3dWrKNrWbWQ/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/3dWrKNrWbWQ/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/knDBuDSr3e6KvMnVHpVtlF9kkZI"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'p_LN67IxAHw'
        },
        'snippet': {
          'publishedAt': '2018-06-17T14:58:04.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Costa Rica vs. Serbia | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Costa Rica vs. Serbia in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/p_LN67IxAHw/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/p_LN67IxAHw/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/p_LN67IxAHw/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/eyNJKHYn-VYCpOz2YxWmFV9L-9A"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'HBSUm4dfRl4'
        },
        'snippet': {
          'publishedAt': '2018-06-16T21:36:14.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Croatia vs. Nigeria | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Croatia vs. Nigeria in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/HBSUm4dfRl4/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/HBSUm4dfRl4/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/HBSUm4dfRl4/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/f86_j8TNquZuDhomsENZUsLxAnU"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'WJGAmZDxrvc'
        },
        'snippet': {
          'publishedAt': '2018-06-16T13:08:22.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: France vs. Australia | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of France vs. Australia in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/WJGAmZDxrvc/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/WJGAmZDxrvc/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/WJGAmZDxrvc/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/Y4gGFUWMFF6pvWeH-R4gpU7MhYA"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '5DXq7vKEa04'
        },
        'snippet': {
          'publishedAt': '2018-06-17T19:46:18.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': 'FIFA World Cup™ Today reacts to Mexico\'s win vs. Germany | FIFA World Cup™ Today',
          'description': 'FIFA World Cup™ Today reacts to Mexico\'s 1-0 win vs. Germany in the 2018 FIFA World Cup™. SUBSCRIBE to get the latest FOX Soccer content: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/5DXq7vKEa04/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/5DXq7vKEa04/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/5DXq7vKEa04/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/FSukhtxa9lIrH63ZfJteWYUj3KM"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'kX5VqWGe0B4'
        },
        'snippet': {
          'publishedAt': '2018-06-17T18:33:51.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': 'Coutinho\'s goal gives Brazil a 1-0 lead over Switzerland | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch Coutinho\'s goal vs Switzerland during Sunday\'s action in the 2018 FIFA World Cup™ SUBSCRIBE to get the latest FOX Soccer content: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/kX5VqWGe0B4/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/kX5VqWGe0B4/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/kX5VqWGe0B4/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/zaxjX0461CaH6M_6D53EalCjC6o"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'ACry2Yw6deM'
        },
        'snippet': {
          'publishedAt': '2018-06-18T03:26:13.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': 'Watch every goal from Sunday\'s FIFA World Cup™ matches | 2018 FIFA World Cup™',
          'description': 'Watch all eight goals, sponsored by Powerade. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World Cup ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/ACry2Yw6deM/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/ACry2Yw6deM/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/ACry2Yw6deM/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/S1DzDGZ46Nll_qmvbfqcP-7qcyA"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'wOXgGNPmtdg'
        },
        'snippet': {
          'publishedAt': '2018-06-16T18:37:55.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Peru vs. Denmark | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Peru vs. Denmark in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/wOXgGNPmtdg/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/wOXgGNPmtdg/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/wOXgGNPmtdg/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/rUpka1tqAKwX22NrocUAW4yPWXQ"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'ctAPrS43Xcs'
        },
        'snippet': {
          'publishedAt': '2018-06-15T20:35:32.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Portugal vs. Spain | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Portugal vs. Spain in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/ctAPrS43Xcs/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/ctAPrS43Xcs/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/ctAPrS43Xcs/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/aEQK5HGFnnqw7OrvZ931EMrOc8w"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '6BSeFs40QOI'
        },
        'snippet': {
          'publishedAt': '2018-06-17T17:53:19.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Germany v Mexico - 2018 FIFA World Cup Russia™ - Match 11',
          'description': 'Hirving Lozano\'s goal secured a famous victory for Mexico over reigning World Champions Germany. Find out where to watch live: fifa.tv/watch2018 More match ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/6BSeFs40QOI/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/6BSeFs40QOI/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/6BSeFs40QOI/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/VvkbnbKpURqJ4s10KqtD3T7BVeU"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'uFvG9Cklw_k'
        },
        'snippet': {
          'publishedAt': '2018-06-15T15:26:19.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Egypt vs. Uruguay | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Egypt vs.Uruguay in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/uFvG9Cklw_k/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/uFvG9Cklw_k/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/uFvG9Cklw_k/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/IlC_j3ZtqlAZ-o_tOwEvMCAlQbI"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '4rp2aLQl7vg'
        },
        'snippet': {
          'publishedAt': '2018-06-15T20:43:12.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Portugal v Spain - 2018 FIFA World Cup Russia™ - MATCH 3',
          'description': 'Cristiano Ronaldo stole the show with a spectacular hat-trick to ensure that Portugal and Spain shared the spoils in Match 3 of the FIFA World Cup. Find out ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/4rp2aLQl7vg/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/4rp2aLQl7vg/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/4rp2aLQl7vg/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/I__Ol5jF9l7PmFgEjLND4gNnhfE"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'bA6_7wFvG0E'
        },
        'snippet': {
          'publishedAt': '2018-06-17T14:27:32.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Costa Rica v Serbia - 2018 FIFA World Cup Russia™ - Match 10',
          'description': 'Find out where to watch live: fifa.tv/watch2018 More match highlights: https://www.youtube.com/playlist?list=PLCGIzmTE4d0hww7NG9ytmooEUZov2k-23 More ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/bA6_7wFvG0E/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/bA6_7wFvG0E/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/bA6_7wFvG0E/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/z38mIQXvYrR7Zk0OtHKa2Ji4nnk"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'X3UvgCd2cGY'
        },
        'snippet': {
          'publishedAt': '2018-06-15T17:50:06.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Morocco vs. Iran | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Morocco vs.Iran in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/X3UvgCd2cGY/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/X3UvgCd2cGY/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/X3UvgCd2cGY/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/0Cv0_8_QV7kcbTtQAKoAkjAHsFw"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'q5Lu3a6RpYA'
        },
        'snippet': {
          'publishedAt': '2018-06-17T21:24:33.000Z',
          'channelId': 'UCiWLfSweyRNmLpgEHekhoAg',
          'title': 'Episode 6: Mexico fans take over the 2018 World Cup | Project: Russia | ESPN FC',
          'description': 'In Episode 6 of Project: Russia, Mexico\'s fans take over Moscow ahead of their first match at the 2018 World Cup, a 1-0 win over Germany. ✓ Subscribe to ESPN ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/q5Lu3a6RpYA/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/q5Lu3a6RpYA/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/q5Lu3a6RpYA/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'ESPN',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/612eY5T1M9We2L8wD_bpXuMYwRE"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'FEPA8ShYFoY'
        },
        'snippet': {
          'publishedAt': '2018-06-14T17:38:18.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': '90 in 90: Russia vs. Saudi Arabia | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch 90 minutes of Russia vs. Saudi Arabia in 90 seconds. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/FEPA8ShYFoY/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/FEPA8ShYFoY/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/FEPA8ShYFoY/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/zPYfzoEpQ4VZ6UoipOn_nW6Lobc"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'Xvarnwv6hRk'
        },
        'snippet': {
          'publishedAt': '2018-06-16T15:43:29.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Argentina v Iceland - 2018 FIFA World Cup Russia™ - MATCH 7',
          'description': 'Iceland secured a famous point on their World Cup debut, holding Argentina to a draw. Find out where to watch live: fifa.tv/watch2018 More match highlights: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Xvarnwv6hRk/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Xvarnwv6hRk/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Xvarnwv6hRk/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/mTXkATN_WS5K1kKJaA4vdc_o7eE"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'LPzZa-Btx6I'
        },
        'snippet': {
          'publishedAt': '2018-06-15T14:40:12.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Egypt v Uruguay - 2018 FIFA World Cup Russia™ - MATCH 2',
          'description': 'A late Jose Gimenez header wins it for Uruguay! Enjoy the highlights Find out where to watch live: fifa.tv/watch2018 More match highlights: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/LPzZa-Btx6I/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/LPzZa-Btx6I/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/LPzZa-Btx6I/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/j2biuir-gbCPWWvrkh_OP_fXLoo"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'f2sif-oo90o'
        },
        'snippet': {
          'publishedAt': '2018-06-17T18:20:55.000Z',
          'channelId': 'UCiWLfSweyRNmLpgEHekhoAg',
          'title': 'Mexico shocks Germany 1-0 at 2018 World Cup thanks to Hirving Lozano\'s goal | ESPN FC',
          'description': 'Stewart Robson and Alexis Nunes break down Mexico\'s shocking 1-0 win over defending champion Germany at the 2018 World Cup in Russia. ✓ Subscribe to ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/f2sif-oo90o/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/f2sif-oo90o/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/f2sif-oo90o/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'ESPN',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/WhbPOz2EvPyKqePjRpMo1lVDdU0"',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'u3wfrhjoIJg'
        },
        'snippet': {
          'publishedAt': '2018-06-18T20:39:10.000Z',
          'channelId': 'UCpcTrCXblq78GZrTUTLWeBw',
          'title': 'Tunisia v England - 2018 FIFA World Cup Russia™ - Match 14',
          'description': 'Find out where to watch live: fifa.tv/watch2018 More match highlights: https://www.youtube.com/playlist?list=PLCGIzmTE4d0hww7NG9ytmooEUZov2k-23 More ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/u3wfrhjoIJg/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/u3wfrhjoIJg/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/u3wfrhjoIJg/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FIFATV',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/cXbuh8vyTjB9EScajqrfSdT3tfs"',
        'id': {
          'kind': 'youtube#video',
          'videoId': '8ZdO86pV3PE'
        },
        'snippet': {
          'publishedAt': '2018-06-16T22:15:39.000Z',
          'channelId': 'UCooTLkxcpnTNx6vfOovfBFA',
          'title': 'Watch every goal from Saturday\'s FIFA World Cup™ matches | 2018 FIFA World Cup™ Highlights',
          'description': 'Watch all eight goals, sponsored by Powerade. SUBSCRIBE to get the latest FOX Soccer content: http://foxs.pt/SubscribeFOXSOCCER ▻Top 100 World Cup ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/8ZdO86pV3PE/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/8ZdO86pV3PE/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/8ZdO86pV3PE/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FOX Soccer',
          'liveBroadcastContent': 'none'
        }
      }
    ]
  };
/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};



// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm) {
// console.log('`fetchVideos` ran');
  const query = {
    part: 'snippet',
    key : API_KEY, 
    q: searchTerm,
    maxResults: 25
  };

  $.getJSON(BASE_URL, query, function (response) {
    
    const vidData = response;
    console.log(vidData);

    const videos = decorateResponse(vidData); 
    addVideosToStore(videos);
    render();
    
  });  
};

//fetchVideos('world cup');

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  
  
  return response.items.map(item => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url

  }));
  //console.log(results);
};

//decorateResponse(mockData);

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `
  <li data-id="${video.id}">
   <h3>${video.title}</h3> 
   <a href="https://www.youtube.com/watch?v=${video.id}"><img src="${video.thumbnail}"></a> </li>
   `;
};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};
// console.log(videos);

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const videoElements = store.videos.map (vid => {
    return generateVideoItemHtml(vid);
  });
  $('.results').html(videoElements);
};

// const videos = decorateResponse(mockData);
// addVideosToStore(videos);
// render();


// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() { 
  
  $('form').on('submit', function(event){ 
    event.preventDefault(); 
    console.log ('`handleFormSubmit` ran');

    //do some ajax stuff here?? 
    const queryTarget = $(event.currentTarget).find('#search-term');
    const query = queryTarget.val();
    //console.log(query);
    queryTarget.val('');
    fetchVideos(query);

    
  });
 
};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  handleFormSubmit();
});
